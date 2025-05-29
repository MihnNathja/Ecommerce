# 🛒 Ecommerce Web App

Website thương mại điện tử gồm:
- 👤 Giao diện người dùng (User): xem sản phẩm, thêm vào giỏ hàng, đặt hàng, quản lý đơn hàng cá nhân.
- 🛠️ Giao diện quản trị (Admin): thêm/sửa/xoá sản phẩm, thêm loại sản phẩm, ẩn/hiện sản phẩm.

## Công nghệ sử dụng
- **Frontend**: React + Vite + TailwindCSS + React Router + React Toastify
- **Backend**: Node.js + Express + Mongoose (MongoDB)
- **Database**: MongoDB

---

## 🛠️ Cài đặt 

### 📦 Yêu cầu hệ thống

- [Node.js](https://nodejs.org/) >= 16
- [MongoDB](https://www.mongodb.com/try/download/community) (chạy trên `localhost:27017`)

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
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
JWT_SECRET=your_jwt_secret
```

> Thay đổi `MONGO_URI` nếu bạn dùng MongoDB Atlas hoặc port khác.

### Bước 3: Khởi chạy server backend
```bash
npm run dev
```
> Server chạy tại: `http://localhost:5000`

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
> Ứng dụng chạy tại: `http://localhost:5173`

---

## 🌟 Các tính năng đã hoàn thành

### Trang user:
- Đăng nhập, đăng ký, quên mật khẩu, đặt lại mật khẩu qua email/OTP.
- Hiển thị danh sách sản phẩm dạng card, responsive grid.
- Thêm sản phẩm vào giỏ hàng, chỉnh sửa/xoá sản phẩm trong giỏ.
- Trang giỏ hàng: tăng/giảm số lượng, xoá sản phẩm, xem tổng tiền.
- Trang thanh toán: nhập/chỉnh sửa địa chỉ, số điện thoại, chọn phương thức thanh toán, xác nhận đặt hàng.
- Thông báo (toast) khi thêm/xoá sản phẩm, thanh toán thành công.

### Trang admin:
- Đăng nhập với quyền admin.
- Thêm, sửa, xoá sản phẩm.
- Thêm loại sản phẩm (qua popup).
- Hiển thị sản phẩm dạng bảng.

---

## 📌 Ghi chú cấu hình API frontend

Trong file `frontend/src/services/api.js`, baseURL đã mặc định trỏ về:
```js
baseURL: 'http://localhost:5000/api'
```
Bạn có thể thay đổi nếu backend chạy ở cổng khác hoặc qua IP.

---

## 🧪 Kiểm tra nhanh sau khi chạy thành công

1. Mở `http://localhost:5173`
2. Đăng ký tài khoản mới hoặc đăng nhập.
3. Thêm sản phẩm vào giỏ hàng, kiểm tra chức năng giỏ hàng và thanh toán.
4. Đăng nhập admin tại `/admin` để quản lý sản phẩm.

---

## 💬 Hỗ trợ

Liên hệ người phát triển nếu cần hỗ trợ cấu hình hoặc triển khai trên môi trường khác.

---

> Đây là hệ thống phục vụ mục đích học tập, chưa có cấu hình bảo mật sản xuất. Hãy cân nhắc trước khi sử dụng cho mục đích thực tế!
