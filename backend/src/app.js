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

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Quick Bite Restaurant API! Server is running successfully."
  });
});