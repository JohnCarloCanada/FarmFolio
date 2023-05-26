import React from "react";

const ErrorHandling = ({ error }) => {
  return (
    <section className="h-32 flex justify-center items-center text-red-800 text-2xl font-bold">
      <p>Message: {error}</p>
    </section>
  );
};

export default ErrorHandling;
