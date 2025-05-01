import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import ProductCard from '../../components/user/ProductCard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await getProducts();
    const data = res.data.filter((p) => p.visible !== false); // chỉ hiển thị nếu visible
    setProducts(data);
  };

  const handleAddToCart = (productId) => {
    toast.success('Đã thêm vào giỏ hàng!');
    console.log('Thêm vào giỏ:', productId);
    // bạn có thể lưu vào localStorage hoặc gọi API cart ở đây
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Sản phẩm mới</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductListPage;
