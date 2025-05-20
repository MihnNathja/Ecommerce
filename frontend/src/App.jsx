import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// Admin
import ProductManagePage from './pages/admin/ProductManagePage';
import AddProductPage from './pages/admin/AddProductPage';
import EditProductPage from './pages/admin/EditProductPage';



// User
import ProductListPage from './pages/user/ProductListPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LandingPage />} />
          {/* User routes */}
          <Route path="/user" element={<ProductListPage />} />

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
