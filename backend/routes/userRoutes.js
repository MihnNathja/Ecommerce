const express = require('express');
const userController = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middlewares/auth');
const router = express.Router();

//router.get('/', authMiddleware, adminMiddleware, userController.getAllUsers);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:id', authMiddleware, userController.getUserById);
router.put('/:id', authMiddleware, userController.updateUser);

module.exports = router;