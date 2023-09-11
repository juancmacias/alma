import React from 'react';

const ApiRequest = ({ apiData }) => {
  return (
    <div>
      <h1>{apiData.title}</h1>
      <p>{apiData.content}</p>
    </div>
  );
};

export default ApiRequest;
