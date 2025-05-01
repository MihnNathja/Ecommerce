import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-100 to-orange-200 text-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Chào mừng đến hệ thống thương mại</h1>
      <div className="flex space-x-6">
        <button
          onClick={() => navigate('/user')}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md"
        >
          👤 Vào trang User
        </button>
        <button
          onClick={() => navigate('/admin')}
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md"
        >
          🛠️ Vào trang Admin
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
