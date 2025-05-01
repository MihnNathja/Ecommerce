import React from 'react';

function ProductTable({ products, onEdit, onDelete, onToggleVisibility }) {
  return (
    <div className="overflow-x-auto bg-white shadow rounded-lg">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="px-4 py-2">Hình ảnh</th>
            <th className="px-4 py-2">Tên</th>
            <th className="px-4 py-2">Loại</th>
            <th className="px-4 py-2">Giá</th>
            <th className="px-4 py-2">Mô tả</th>
            <th className="px-4 py-2">Trạng thái</th>
            <th className="px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="border-t hover:bg-gray-50">
              <td className="p-2">
                {p.imageUrl ? (
                  <img src={p.imageUrl} alt={p.name} className="h-14 w-14 object-cover rounded" />
                ) : (
                  <span className="text-xs text-gray-400">Không có ảnh</span>
                )}
              </td>
              <td className="p-2 font-medium">{p.name}</td>
              <td className="p-2 text-gray-700">{p.category}</td>
              <td className="p-2 text-red-600">{p.price.toLocaleString()}₫</td>
              <td className="p-2 text-gray-600">{p.description}</td>
              <td className="p-2">
                <span className={`text-xs font-semibold px-2 py-1 rounded ${p.visible ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                  {p.visible ? 'Hiển thị' : 'Đã ẩn'}
                </span>
              </td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => onEdit(p._id)}
                  className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                >
                  Sửa
                </button>
                <button
                  onClick={() => onDelete(p._id)}
                  className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                >
                  Xoá
                </button>
                <button
                  onClick={() => onToggleVisibility(p._id)}
                  className="px-3 py-1 bg-gray-300 text-xs rounded hover:bg-gray-400"
                >
                  {p.visible ? 'Ẩn' : 'Hiện'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
