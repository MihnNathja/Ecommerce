import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserNavbar from '../../components/user/UserNavbar';
import { getCurrentUser, clearCart } from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const location = useLocation();
  const cart = location.state?.cart;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cod');


useEffect(() => {
  const fetchUser = async () => {
    const response = await getCurrentUser();
    setUser(response.data.user);
    setPhone(response.data.user.phone || '');
    setAddress(response.data.user.address || '');
  };
  fetchUser();
}, []);

const handlePayment = async () => {
  if (!address.trim() || !phone.trim()) {
    toast.error('Vui lòng nhập đầy đủ thông tin đơn hàng!');
    return;
  }
  try {
    await clearCart();
    toast.success('Thanh toán thành công! Đang chuyển về trang chủ...');
    setTimeout(() => {
      navigate('/user');
    }, 1500);
  } catch (error) {
    toast.error('Có lỗi xảy ra khi thanh toán. Vui lòng thử lại!');
  }
};


  if (!user) return <div>Loading...</div>;
  if (!cart) return <div>Không có thông tin giỏ hàng.</div>;

  return (
    <div>
      <UserNavbar />
      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
        {/* Tiêu đề căn giữa */}
        <h2 className="text-2xl font-bold mb-8 text-center">Thanh toán đơn hàng</h2>
        {/* Các thông tin user: dùng flex-col và gap để đều và cách xa */}
        <div className="flex flex-col gap-6 mb-8">
          <div>
            <b>Khách hàng:</b> {user.name}
          </div>
          <div>
            <b>Email:</b> {user.email}
          </div>
          <div>
            <label className="font-semibold">Số điện thoại:</label>
            <input
              type="text"
              className="ml-2 border rounded px-2 py-1 w-1/3"
              placeholder="Nhập số điện thoại"
              value={phone}
              required
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label className="font-semibold">Địa chỉ nhận hàng:</label>
            <input
              type="text"
              className="ml-2 border rounded px-2 py-1 w-2/3"
              placeholder="Nhập địa chỉ nhận hàng"
              value={address}
              required
              onChange={e => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label className="font-semibold">Phương thức thanh toán:</label>
            <select
              className="ml-2 border rounded px-2 py-1"
              value={paymentMethod}
              onChange={e => setPaymentMethod(e.target.value)}
            >
              <option value="cod">Thanh toán khi nhận hàng (COD)</option>
              <option value="bank">Chuyển khoản ngân hàng</option>
            </select>
          </div>
        </div>
        {/* Danh sách sản phẩm */}
        <div className="mb-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2">Sản phẩm</th>
                <th className="py-2">Số lượng</th>
                <th className="py-2">Giá</th>
                <th className="py-2">Tổng</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map(item => (
                <tr key={item.product._id}>
                  <td className="py-2">{item.product.name}</td>
                  <td className="py-2">{item.quantity}</td>
                  <td className="py-2">{item.product.price.toLocaleString()}₫</td>
                  <td className="py-2">{(item.product.price * item.quantity).toLocaleString()}₫</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Tổng cộng và nút thanh toán */}
        <div className="flex justify-between items-center mt-6">
          <div className="font-bold text-lg">
            Tổng cộng: {cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toLocaleString()}₫
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow"
            onClick={() => handlePayment()}
          >
            Thanh toán đơn hàng
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OrderPage;