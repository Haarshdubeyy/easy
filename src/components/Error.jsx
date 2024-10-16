import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="text-red-500 text-lg my-5">
      {message}
    </div>
  );
};

export default Error;
