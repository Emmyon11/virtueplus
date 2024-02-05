'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex font-nunito p-6 flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-lg text-center text-gray-600 mb-4">
        Something went wrong. Please try again later.
      </p>
      <button
        className="bg-primary text-secondary px-4 py-2 rounded-md transition duration-300 hover:bg-red-500 "
        onClick={() => window.location.reload()}
      >
        Refresh Page
      </button>
    </div>
  );
}
