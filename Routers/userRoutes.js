// routes/userRoutes.js
const express = require('express');
const userController = require('../Controllers/userController');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

// Add more routes as needed for other CRUD operations.

module.exports = router;
