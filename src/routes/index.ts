import {Router} from 'express';
import { UserController} from './../controllers/userController';
import {verifyToken} from './../lib/validateToken';  



export const router = Router();

const userController = new UserController();

// precede de ruta /api 

router.get('/', userController.getAllUsers);

router.post('/signup', userController.signUp);

router.post('/signin', userController.signIn);

router.get('/private', verifyToken , userController.dataPrivate);


