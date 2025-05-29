import React, { useEffect, useState } from 'react';
import { getProducts, addToCart } from '../../services/api';
import ProductCard from '../../components/user/ProductCard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import UserNavbar from '../../components/user/UserNavbar';

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
        toast.success('Sản phẩm đã được thêm vào giỏ hàng!');
      })
      .catch((err) => {
        toast.error('Không thể thêm vào giỏ hàng. Vui lòng thử lại sau.');
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <UserNavbar />

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
