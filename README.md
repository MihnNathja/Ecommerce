# 🛒 Ecommerce Web App

Website thương mại điện tử gồm:
- 👤 Giao diện người dùng (User) để xem sản phẩm
- 🛠️ Giao diện quản trị (Admin) để thêm/sửa/xoá sản phẩm, thêm loại sản phẩm

Công nghệ sử dụng:
- **Frontend**: React + Vite + TailwindCSS
- **Backend**: Node.js + Express
- **Database**: MongoDB

---

## ✅ Cài đặt thủ công (không dùng Docker)

### 📦 Yêu cầu hệ thống

Trên máy mới, cần cài đặt:
- [Node.js](https://nodejs.org/) (khuyên dùng phiên bản >= 16)
- [MongoDB](https://www.mongodb.com/try/download/community) Community Server (chạy trên `localhost:27017`)

---

## 🧠 Cấu trúc thư mục

```
Ecommerce/
├── backend/         # Node.js backend API
├── frontend/        # React frontend UI
└── README.md        # Tài liệu hướng dẫn
```

---

## 🔧 1. Cài đặt và chạy **Backend**

### Bước 1: Cài đặt dependencies
```bash
cd backend
npm install
```

### Bước 2: Tạo file `.env`
Tạo file `backend/.env` với nội dung:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
```

> Thay đổi `MONGO_URI` nếu bạn dùng MongoDB Atlas hoặc port khác.

### Bước 3: Khởi chạy server backend
```bash
npm run dev
```

> Mặc định server chạy tại: `http://localhost:5000`

Nếu thành công, bạn sẽ thấy log:
```
Server running on port 5000
```

---

## 💻 2. Cài đặt và chạy **Frontend**

### Bước 1: Cài đặt dependencies
```bash
cd frontend
npm install
```

### Bước 2: Chạy frontend
```bash
npm run dev
```

> Mặc định ứng dụng chạy tại: `http://localhost:5173`

### Các trang chính:
- Trang landing chọn vai trò: `http://localhost:5173/`
- Trang user xem sản phẩm: `http://localhost:5173/user`
- Trang admin quản lý: `http://localhost:5173/admin`

---

## 📌 Ghi chú cấu hình API frontend

Trong file `frontend/services/api.js`, baseURL đã mặc định trỏ về:
```js
baseURL: 'http://localhost:5000/api'
```
Bạn có thể thay đổi nếu backend chạy ở cổng khác hoặc qua IP.

---

## ✅ Tính năng đã hoàn thành

### Trang admin:
- Thêm, sửa, xoá sản phẩm
- Ẩn/hiện sản phẩm
- Thêm loại sản phẩm (qua popup)
- Hiển thị sản phẩm dạng bảng

### Trang user:
- Hiển thị danh sách sản phẩm theo card
- Responsive grid

---

## 🧪 Kiểm tra nhanh sau khi chạy thành công

1. Mở `http://localhost:5173`
2. Chọn "Admin" để:
   - Thêm một loại sản phẩm mới
   - Tạo một sản phẩm thuộc loại đó
3. Chọn "User" để:
   - Kiểm tra sản phẩm vừa được hiển thị

---

## 💬 Hỗ trợ

Liên hệ người phát triển nếu cần hỗ trợ cấu hình hoặc triển khai trên môi trường khác.

---

Chúc bạn triển khai thành công hệ thống thương mại này! 🚀
