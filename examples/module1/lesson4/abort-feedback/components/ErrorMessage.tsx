export const ErrorMessage = ({
  retryRequest,
}: {
  retryRequest: () => void;
}) => {
  return (
    <div className="flex flex-row items-center">
      <p className="mr-2">Sorry, there seems to be connectivity issues...</p>
      <button
        onClick={retryRequest}
        className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
      >
        Try again
      </button>
    </div>
  );
};
