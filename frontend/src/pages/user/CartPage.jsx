import React, { useEffect, useState } from 'react';
import { getCart, updateCart, removeFromCart } from '../../services/api';
import UserNavbar from '../../components/user/UserNavbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const res = await getCart();
      setCart(res.data);
    } catch (err) {
      setCart(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleQuantityChange = (productId, delta) => {
    // TODO: Gọi API cập nhật số lượng sản phẩm trong cart (bạn cần tạo API này ở backend)
    // Sau khi cập nhật thành công, gọi lại fetchCart();
    updateCart(productId, { quantity: delta })
      .then(() => {
        fetchCart();
      });
  };

  const handleRemove = (productId) => {
    removeFromCart(productId)
      .then(() => {
        toast.success('Đã xóa sản phẩm khỏi giỏ hàng!');
        fetchCart();
      })
      .catch(() => {
        toast.error('Xóa sản phẩm thất bại!');
      });
  };

  const handleCheckout = () => {
    navigate('/order', { state: { cart } });
  };

  return (
    <div>
        <UserNavbar />
            {loading ? (
        <div className="text-center mt-10">Đang tải giỏ hàng...</div>
        ) : !cart || !cart.items.length ? (
        <div className="text-center mt-10">Giỏ hàng trống.</div>
        ) : (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
        
        <h2 className="text-2xl font-bold mb-6">Giỏ hàng của bạn</h2>
        <table className="w-full mb-6">
            <thead>
            <tr className="border-b">
                <th className="py-2">Sản phẩm</th>
                <th className="py-2">Giá</th>
                <th className="py-2">Số lượng</th>
                <th className="py-2">Tổng</th>
            </tr>
            </thead>
            <tbody>
            {cart.items.map(item => (
                <tr key={item.product._id} className="border-b">
                <td className="py-2 flex items-center space-x-2">
                    <img src={item.product.imageUrl || 'https://via.placeholder.com/40'} alt={item.product.name} className="w-10 h-10 object-cover rounded" />
                    <span>{item.product.name}</span>
                </td>
                <td className="py-2 text-red-500">{item.product.price.toLocaleString()}₫</td>
                <td className="py-2">
                    <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => handleQuantityChange(item.product._id, -1)}
                    disabled={item.quantity <= 1}
                    >-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => handleQuantityChange(item.product._id, 1)}
                    >+</button>
                </td>
                <td className="py-2 font-semibold">{(item.product.price * item.quantity).toLocaleString()}₫</td>
                <td>
                    <button
                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleRemove(item.product._id)}
                    >
                    Xóa
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        <div className="text-right">
            <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleCheckout()}
            >
            Thanh toán
            </button>
        </div>
        <div className="text-right font-bold text-lg">
            Tổng cộng: {cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toLocaleString()}₫
        </div>
        </div>
        )}
        <ToastContainer />
    </div>
  );
}

export default CartPage;