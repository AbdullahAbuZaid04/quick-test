const express = require('express');
const app = express();

// إعداد قراءة البيانات بتنسيق JSON
app.use(express.json());

// استدعاء ملفات الـ Routes الموجودة لديك في المجلد
const adminRoutes = require('./routes/adminRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

// ربط الـ Routes بالسيرفر
app.use('/api/admin', adminRoutes);
app.use('/api/invoice', invoiceRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/payment', paymentRoutes);

// منفذ التشغيل
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running successfully on port ${PORT}`);
});
