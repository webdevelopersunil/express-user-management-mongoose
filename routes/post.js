// Call the loaded express from host
const express = require('express');

// Require the Router from Express package
const router = express.Router();

// Require the controller
const postController = require('../controllers/post_controller');




// Routes Start
router.get('/',postController.post);

router.post('create',postController.create);
// Routes End


// Exported the routes for host file acceess index.js
module.exports = router;