import React, { useEffect, useState } from 'react';
import ProductTable from '../../components/admin/ProductTable';
import { getProducts, deleteProduct, updateProduct, createCategory} from '../../services/api';
import { useNavigate } from 'react-router-dom';

function ProductManagePage() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  

  const fetch = async () => {
    const res = await getProducts();
    const data = res.data.map((p) => ({ ...p, visible: p.visible ?? true }));
    setProducts(data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetch();
  };

  const handleToggleVisibility = async (id) => {
    const product = products.find((p) => p._id === id);
    await updateProduct(id, { visible: !product.visible });
    fetch();
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit/${id}`);
  };
  const handleAddCategory = async () => {
    await createCategory({ name: newCategory });
    setNewCategory('');
    alert('Đã thêm!');
  };
  const navigate = useNavigate();

  const goToAddPage = () => {
    navigate('/admin/add');
  };
  
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Quản lý sản phẩm</h1>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium"
          >
            + Thêm loại sản phẩm
          </button>
          <button
            onClick={goToAddPage}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm transition"
          >
            + Thêm sản phẩm
          </button>
        </div>
      </div>
  
      <ProductTable
        products={products}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onToggleVisibility={handleToggleVisibility}
      />
  
      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h2 className="text-lg font-semibold mb-4">Thêm loại sản phẩm</h2>
            <input
              type="text"
              placeholder="Tên loại"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 text-sm"
              >
                Hủy
              </button>
              <button
                onClick={async () => {
                  await createCategory({ name: newCategory });
                  setNewCategory('');
                  setShowModal(false);
                  alert('✅ Đã thêm loại sản phẩm!');
                }}
                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );  
}

export default ProductManagePage;
