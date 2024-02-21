//concepts used
// 1. extends class
// 2. constructor overridding
// 3. whenever overriding thenn super keyword is used

class ApiError extends Error{
  constructor(
    statusCode,
    message= "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message)
    this.statusCode = statusCode;
    this.data = null
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    }
    else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };