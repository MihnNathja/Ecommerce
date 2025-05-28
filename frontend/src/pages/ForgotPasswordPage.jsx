import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import axios from 'axios';
import { forgotPassword, verifyOtp } from '../services/api'; 

function ForgotPasswordPage() {
  const [step, setStep] = useState(1); // 1: nhập email, 2: nhập OTP
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await forgotPassword({ email });
      setStep(2);
    } catch (err) {
        console.log('Lỗi gửi OTP:', err, err.response);
      setError(err.response?.data?.message || 'Không gửi được OTP');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Gửi OTP và email sang backend để xác thực
      // Nếu đúng, chuyển sang trang reset password, truyền email và otp
      const res = await verifyOtp({ email, otp });
      if (res.status === 200) {
        navigate('/reset-password', { state: { email, otp } });
      }
    } catch (err) {
      setError('OTP không đúng hoặc đã hết hạn. Đang gửi lại OTP mới...');
      // Gửi lại OTP
      await forgotPassword({ email });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow w-80" onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp}>
        <h2 className="text-2xl font-bold mb-6 text-center">Quên mật khẩu</h2>
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Nhập email"
              className="w-full mb-4 px-3 py-2 border rounded"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold"
            >
              Gửi mã OTP
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Nhập mã OTP"
              className="w-full mb-4 px-3 py-2 border rounded"
              value={otp}
              onChange={e => setOtp(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold"
            >
              Xác nhận OTP
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default ForgotPasswordPage;