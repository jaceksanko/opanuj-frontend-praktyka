import { ErrorMessage } from './components/ErrorMessage';
import { useUsersClient } from './hooks/useUsersClient';

const App = () => {
  const { users, error, retryRequest } = useUsersClient();

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        {error && <ErrorMessage retryRequest={retryRequest} />}
      </div>

      <ul className="space-y-2">
        {users?.map((user, index) => (
          <li
            className="bg-white p-4 rounded-md border border-gray-100"
            key={index}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
