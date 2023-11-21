class ApiResponse {
  constructor(message = "Success", statusCode, data) {
    this.status = statusCode;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export default ApiResponse;
