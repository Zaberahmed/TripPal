import { Router } from 'express';
import * as userController from './../controllers/user.controller';
import * as paymentController from './../controllers/payment.controller';
import { authenticator } from '../middlewares/authenticator';

export const userRouter = Router();

userRouter.post('/signup', userController.signUp);
userRouter.post('/signin', userController.signIn);
userRouter.get('/profile', authenticator, userController.profile);
userRouter.delete('/signout', authenticator, userController.signOut);

userRouter.get('/getall', userController.getAllUsers);
userRouter.get('/get/:id', userController.getUserById);
userRouter.post('/payment/create-checkout-session', paymentController.pay);
