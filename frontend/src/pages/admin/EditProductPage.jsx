import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById, updateProduct } from '../../services/api';

function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    imageUrl: '',
    visible: true,
  });

  useEffect(() => {
    const fetch = async () => {
      const res = await getProductById(id);
      const data = res.data;
      setForm({
        name: data.name,
        category: data.category,
        price: data.price,
        description: data.description,
        imageUrl: data.imageUrl || '',
        visible: data.visible ?? true,
      });
    };
    fetch();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, { ...form, price: parseFloat(form.price) });
    navigate('/admin');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Chỉnh sửa sản phẩm</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Tên sản phẩm"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Loại hàng"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Giá"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          placeholder="Link ảnh (tuỳ chọn)"
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Mô tả"
          className="w-full border rounded px-3 py-2"
        />
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="visible"
            checked={form.visible}
            onChange={handleChange}
          />
          <label>Hiển thị</label>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded"
        >
          Cập nhật sản phẩm
        </button>
      </form>
    </div>
  );
}

export default EditProductPage;
