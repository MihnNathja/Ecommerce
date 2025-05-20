import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { login } from '../services/api';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await login({ email, password });
      localStorage.setItem('token', res.data.token);

      // Lấy role từ token hoặc từ res.data.role
      let role = res.data.role;
      if (!role) {
        const decoded = jwtDecode(res.data.token);
        role = decoded.role;
      }

      alert('Đăng nhập thành công!');
      if (role === 'admin') {
        window.location.href = '/admin';
      } else {
        window.location.href = '/user';
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Đăng nhập thất bại');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full mb-6 px-3 py-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default LoginPage;