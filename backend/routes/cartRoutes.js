const express = require('express');
const cartController = require('../controllers/cartController');
const { authMiddleware} = require('../middlewares/auth');
const router = express.Router();

router.post('/', authMiddleware, cartController.addToCart);
router.get('/', authMiddleware, cartController.getCart);
router.put('/:id', authMiddleware, cartController.updateCart);
router.delete('/:id', authMiddleware, cartController.removeFromCart);
router.delete('/', authMiddleware, cartController.clearCart);
module.exports = router;