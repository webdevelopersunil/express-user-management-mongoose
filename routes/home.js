// Call the loaded express from host
const express = require('express');

// Require the Router from Express package
const router = express.Router();

// Require the controller
const homeController = require('../controllers/home_controller');




// Routes Start

router.get('/',homeController.home);

router.get('/login',homeController.login);

router.get('/register',homeController.register);

router.get('/forgot-password',homeController.forgot_password);

// Routes End


// Exported the routes for host file acceess index.js
module.exports = router;