// load the express library
const express = require('express');

const router = express.Router();

const userController = require('../controllers/user_controller');

router.post('/register',userController.register);
router.get('/profile',userController.profile);
router.post('/login',userController.login);

// Exported the routes for host file acceess index.js
module.exports = router;
