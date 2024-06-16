const express = require('express');
const routerPassword = express.Router();
const resetPassword = require('../controllers/resetpassword.controllers');
const resetPasswordService = require('../services/resetpassword.services');

routerPassword.use(express.json());

routerPassword.post('/reset-password', resetPasswordService, resetPassword);


