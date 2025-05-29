const Cart = require('../models/Cart');
const Product = require('../models/Product');

const addToCart = async (req, res) => {
  const userId = req.user._id; // Lấy từ middleware xác thực
  const { productId } = req.body;

  // Kiểm tra sản phẩm tồn tại
  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: 'Sản phẩm không tồn tại' });

  // Tìm cart của user
  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    cart = new Cart({ user: userId, items: [] });
  }

  // Kiểm tra sản phẩm đã có trong cart chưa
  const item = cart.items.find(i => i.product.toString() === productId);
  if (item) {
    item.quantity += 1;
  } else {
    cart.items.push({ product: productId, quantity: 1 });
  }

  await cart.save();
  res.json({ message: 'Đã thêm vào giỏ hàng', cart });
};

const getCart = async (req, res) => {
  const userId = req.user._id; // Lấy từ middleware xác thực

  // Tìm cart của user
  const cart = await Cart.findOne({ user: userId }).populate('items.product');
  if (!cart) return res.status(404).json({ message: 'Giỏ hàng không tồn tại' });

  res.json(cart);
};

const updateCart = async (req, res) => {
  const userId = req.user._id; // Lấy từ middleware xác thực
  const productId = req.params.id; // Lấy từ URL
  const { quantity } = req.body;

  // Tìm cart của user
  let cart = await Cart.findOne({ user: userId });
  if (!cart) return res.status(404).json({ message: 'Giỏ hàng không tồn tại' });

  // Tìm sản phẩm trong cart
  const item = cart.items.find(i => i.product.toString() === productId);
  if (!item) return res.status(404).json({ message: 'Sản phẩm không có trong giỏ hàng' });

  // Cập nhật số lượng
  item.quantity = item.quantity + quantity;
  await cart.save();
  
  res.json({ message: 'Giỏ hàng đã được cập nhật', cart });
};

const removeFromCart = async (req, res) => {
  const userId = req.user._id; // Lấy từ middleware xác thực
  const productId = req.params.id; // Lấy từ URL

  // Tìm cart của user
  let cart = await Cart.findOne({ user: userId });
  if (!cart) return res.status(404).json({ message: 'Giỏ hàng không tồn tại' });

  // Tìm sản phẩm trong cart
  const itemIndex = cart.items.findIndex(i => i.product.toString() === productId);
  if (itemIndex === -1) return res.status(404).json({ message: 'Sản phẩm không có trong giỏ hàng' });

  // Xóa sản phẩm khỏi cart
  cart.items.splice(itemIndex, 1);
  await cart.save();

  res.json({ message: 'Sản phẩm đã được xóa khỏi giỏ hàng', cart });
};

const clearCart = async (req, res) => {
  const userId = req.user._id;

  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    return res.status(404).json({ message: 'Giỏ hàng không tồn tại' });
  }
  cart.items = [];
  await cart.save();

  res.json({ message: 'Giỏ hàng đã được làm trống', cart });
};


module.exports = {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
  clearCart
};