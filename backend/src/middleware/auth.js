// 1. دالة التحقق من الهوية (المسؤولة عن التوكن مثلاً)
const authenticate = (req, res, next) => {
  req.user = { id: 1, role: 'admin' }; // بيانات وهمية لتفادي أخطاء الـ Controllers
  next();
};

// 2. دالة التحقق من الصلاحيات (المسؤولة عن الأدوار مثل admin أو manager)
const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    // نمرر الطلب مؤقتاً لتشغيل السيرفر بنجاح
    next();
  };
};

// تصدير الدالتين معاً ككائن (Object) ليقرأهما مشروعك بنجاح
module.exports = {
  authenticate,
  authorize
};
