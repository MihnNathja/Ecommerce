const express = require('express');
const categoryController = require('../controllers/categoryController');
const { authMiddleware, adminMiddleware } = require('../middlewares/auth');
const router = express.Router();

router.get('/', authMiddleware, categoryController.getAllCategories);
router.post('/', authMiddleware, adminMiddleware, categoryController.addCategory);

module.exports = router;
