import React, { useEffect, useState } from 'react';
import { getProducts, addToCart } from '../../services/api';
import ProductCard from '../../components/user/ProductCard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const res = await getProducts();
    const data = res.data.filter((p) => p.visible !== false);
    setProducts(data);
  };

  const handleAddToCart = ({productId}) => {
    addToCart({ productId })
      .then((res) => {
        console.log('Thêm vào giỏ hàng thành công:', res.data);
      })
      .catch((err) => {
        console.error('Lỗi khi thêm vào giỏ hàng:', err);
        toast.error('Không thể thêm vào giỏ hàng. Vui lòng thử lại sau.');
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow mb-6">
        {/* Bên trái: để trống cho menu sau này */}
        <div className="flex-1"></div>
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

      {/* Danh sách sản phẩm */}
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Sản phẩm mới</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} onAddToCart={handleAddToCart} />
          ))}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ProductListPage;
