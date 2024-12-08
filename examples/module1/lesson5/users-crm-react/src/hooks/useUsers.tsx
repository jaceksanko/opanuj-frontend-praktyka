import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import type { User } from '../model/User';

const USERS_QUERY_KEY = 'users';

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('http://localhost:3000/api/data/users');
  if (!response.ok) throw new Error('Failed to fetch users');
  const data = await response.json();
  return data;
};

export const useFetchUsers = () => {
  return useQuery({
    queryKey: [USERS_QUERY_KEY],
    queryFn: fetchUsers,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
};

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newUser: Pick<User, 'name' | 'status'>) => {
      const response = await fetch('http://localhost:3000/api/data/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) throw new Error('Failed to add user');
      return response.json();
    },
    onMutate: async (newUser) => {
      // Zatrzymujemy wszystkie trwające zapytania
      await queryClient.cancelQueries({ queryKey: [USERS_QUERY_KEY] });

      // Zachowujemy poprzedni stan
      const previousUsers =
        queryClient.getQueryData<User[]>([USERS_QUERY_KEY]) || [];

      // Optymistycznie aktualizujemy UI
      queryClient.setQueryData<User[]>([USERS_QUERY_KEY], (old = []) => [
        ...old,
        { ...newUser, id: Date.now() } as User,
      ]);
      // Zwracamy context z poprzednim stanem wykorzystywanym w onError
      return { previousUsers };
    },
    onError: (_, __, context) => {
      // W razie błędu przywracamy poprzedni stan
      queryClient.setQueryData([USERS_QUERY_KEY], context?.previousUsers);
    },
    onSettled: () => {
      // Po zakończeniu (sukces lub błąd) odświeżamy dane
      queryClient.invalidateQueries({ queryKey: [USERS_QUERY_KEY] });
    }
  });
};
