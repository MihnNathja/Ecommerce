import React, { useState, useEffect } from 'react';
import { createProduct, getCategories } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../themes/colors';

function AddProductPage() {
  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    imageUrl: '',
    visible: true,
  });
  
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(res => setCategories(res.data));
  }, []);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct({ ...form, price: parseFloat(form.price) });
    navigate('/admin'); // hoặc bạn có thể hiển thị toast trước
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Thêm sản phẩm mới</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1 font-medium">Tên sản phẩm</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Loại hàng</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
              >
              <option value="">-- Chọn loại sản phẩm --</option>
              {categories.map((c) => (
                <option key={c._id} value={c.name}>{c.name}</option>
              ))}
            </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Giá</label>
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Ảnh (URL)</label>
          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Mô tả</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            name="visible"
            type="checkbox"
            checked={form.visible}
            onChange={handleChange}
          />
          <label>Hiển thị ngay</label>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded text-white font-semibold"
          style={{ backgroundColor: theme.primary }}
        >
          Tạo sản phẩm
        </button>
      </form>
    </div>
  );
}

export default AddProductPage;
