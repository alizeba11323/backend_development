class ApiError extends Error {
  constructor(message, statusCode, errors = [], stack = "") {
    super(message);
    this.message = message;
    this.success = false;
    this.statusCode = statusCode;
    this.data = null;
    this.errors = errors;
    if (this.stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export default ApiError;
