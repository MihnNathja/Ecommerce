const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes.js');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Đúng địa chỉ frontend của bạn
  credentials: true, // Cho phép gửi cookie, header xác thực
}));
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);



// Connect DB and Start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.log(err));
