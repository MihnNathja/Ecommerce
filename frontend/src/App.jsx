import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
// Admin
import ProductManagePage from './pages/admin/ProductManagePage';
import AddProductPage from './pages/admin/AddProductPage';
import EditProductPage from './pages/admin/EditProductPage';



// User
import ProductListPage from './pages/user/ProductListPage';
import CartPage from './pages/user/CartPage';
import OrderPage from './pages/user/OrderPage';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/" element={<LandingPage />} />
          {/* User routes */}
          <Route path="/user" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<OrderPage />} />
          {/* Admin routes */}
          <Route path="/admin" element={<ProductManagePage />} />
          <Route path="/admin/add" element={<AddProductPage />} />
          <Route path="/admin/edit/:id" element={<EditProductPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
