import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-full bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-yellow-400 text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-gray-300 mb-6">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="text-yellow-400 hover:underline">
        Go back to Home
      </a>
    </div>
  );
};
export default NotFound;
export function NotFoundLoader() {
  return new Response("Not Found", {
    status: 404,
    statusText: "Not Found",
  });
}
