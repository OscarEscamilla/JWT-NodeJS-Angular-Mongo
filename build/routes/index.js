"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("./../controllers/userController");
const validateToken_1 = require("./../lib/validateToken");
exports.router = express_1.Router();
const userController = new userController_1.UserController();
// precede de ruta /api 
exports.router.get('/', userController.getAllUsers);
exports.router.post('/signup', userController.signUp);
exports.router.post('/signin', userController.signIn);
exports.router.get('/private', validateToken_1.verifyToken, userController.dataPrivate);
