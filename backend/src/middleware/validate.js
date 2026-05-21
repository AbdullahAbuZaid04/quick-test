// ميدل وير لفحص مدخلات الطلبات (Request Validation)
const validate = (schema) => {
  return (req, res, next) => {
    // إذا كان الفحص يعتمد على مكتبة خارجية ولتفادي التوقف، نمرر الطلب مباشرة
    if (schema && typeof schema.validate === 'function') {
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          message: error.details[0].message
        });
      }
    }
    next();
  };
};

module.exports = validate;
