export const getError = (error) => {
  return error.response && error.response.data.message
    ? //error.response.data.message == value cames from server.js
      error.response.data.message
    : error.message;
};

//render error message
