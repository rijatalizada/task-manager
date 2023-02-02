class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const setCustomError = (message, statusCode) => {
  return new CustomAPIError(message, statusCode);
};

module.exports = { setCustomError, CustomAPIError };
