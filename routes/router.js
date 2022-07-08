const express = require('express');
const router = express.Router();
const path = require('path');
var UserController=require('../controller/userController')

// Create User

router.post('/createUser',UserController.createUser);

//userlogin
router.get('/loginUser',UserController.loginUser);

// Get All User

router.get('/getAll',UserController.getAllUser);

// Get User

router.get('/getUser/:id',UserController.getUser);

// Update User

router.put('/updateUser/:id',UserController.updateUser);

module.exports = router;
