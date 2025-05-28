import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { resetPassword } from '../services/api'; 

function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { email, otp } = location.state || {};

  const handleReset = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await resetPassword({ email, otp, newPassword });
      setSuccess('Đổi mật khẩu thành công! Đang chuyển về trang đăng nhập...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Đổi mật khẩu thất bại');
    }
  };

  if (!email || !otp) {
    return <div className="text-center mt-10 text-red-500">Thiếu thông tin xác thực!</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow w-80" onSubmit={handleReset}>
        <h2 className="text-2xl font-bold mb-6 text-center">Đặt lại mật khẩu</h2>
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
        {success && <div className="mb-4 text-green-600 text-sm">{success}</div>}
        <input
          type="password"
          placeholder="Mật khẩu mới"
          className="w-full mb-6 px-3 py-2 border rounded"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold"
        >
          Đổi mật khẩu
        </button>
      </form>
    </div>
  );
}

export default ResetPasswordPage;