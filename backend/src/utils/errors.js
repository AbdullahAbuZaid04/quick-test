class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// تصدير الكلاس الرئيسي مع أخطاء شائعة متوقعة الاستدعاء في مشروعك
module.exports = {
  AppError,
  BadRequestError: class extends AppError { constructor(message) { super(message || 'Bad Request', 400); } },
  NotFoundError: class extends AppError { constructor(message) { super(message || 'Not Found', 404); } },
  UnauthorizedError: class extends AppError { constructor(message) { super(message || 'Unauthorized', 401); } },
  ForbiddenError: class extends AppError { constructor(message) { super(message || 'Forbidden', 403); } }
};
