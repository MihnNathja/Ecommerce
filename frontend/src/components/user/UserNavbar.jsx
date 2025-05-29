import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow mb-6">
      {/* Bên trái: Icon Home */}
      <div className="flex items-center flex-1">
        <button
          className="flex items-center text-orange-600 hover:text-orange-800 font-semibold"
          onClick={() => navigate('/user')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" />
          </svg>
          <span className="hidden sm:inline">Trang chủ</span>
        </button>
      </div>
      {/* Bên phải: giỏ hàng và avatar user */}
      <div className="flex items-center space-x-6">
        <button
          className="flex items-center space-x-2 text-orange-600 hover:text-orange-800 font-semibold"
          onClick={() => navigate('/cart')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L21 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" />
          </svg>
          <span>Giỏ hàng</span>
        </button>
        <button
          className="flex items-center space-x-2"
          onClick={() => { /* Xử lý mở menu tài khoản hoặc trang cá nhân */ }}
        >
          <img
            src="https://i.pravatar.cc/40?img=1"
            alt="avatar"
            className="w-10 h-10 rounded-full border"
          />
        </button>
      </div>
    </nav>
  );
}

export default UserNavbar;