const Category = require('../models/Category');

const getAllCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

const addCategory = async (req, res) => {
  const { name } = req.body;
  const exists = await Category.findOne({ name });
  if (exists) return res.status(400).json({ message: 'Đã tồn tại' });

  const newCategory = new Category({ name });
  await newCategory.save();
  res.status(201).json(newCategory);
};

module.exports = { getAllCategories, addCategory };