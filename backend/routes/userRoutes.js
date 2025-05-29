const express = require('express');
const userController = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middlewares/auth');
const router = express.Router();

//router.get('/', authMiddleware, adminMiddleware, userController.getAllUsers);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/me', authMiddleware, userController.getCurrentUser);
router.put('/me', authMiddleware, userController.updateUser);
router.post('/forgot-password', userController.sendOtp);
router.post('/reset-password', userController.resetPassword);
router.post('/verify-otp', userController.verifyOtp);

module.exports = router;