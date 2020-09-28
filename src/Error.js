import React from 'react';

const Error = ({ message }) => {
  if (!message) return null;

  return (
    <small style={{ color: "red" }}>
      {message}
    </small>
  );
};

export default Error;
