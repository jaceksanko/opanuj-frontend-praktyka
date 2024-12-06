import { useEffect, useRef, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

export function useUsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  const fetchUsers = async (timeout?: number) => {
    try {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      const controller = new AbortController();
      controllerRef.current = controller;
      let timeoutId: NodeJS.Timeout | null = null;

      if (timeout) {
        timeoutId = setTimeout(() => controller.abort(), timeout);
      }

      const res = await fetch(API_URL, { signal: controller.signal });

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (!res.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await res.json();
      setUsers(data);
      setError(null);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        setError('Request timed out');
      } else {
        setError((error as Error).message);
      }
    }
  };

  useEffect(() => {
    fetchUsers(5000);
  }, []);

  const retryRequest = () => {
    setError(null);
    fetchUsers();
  };

  return { users, error, retryRequest };
}
