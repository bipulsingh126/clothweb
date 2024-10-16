import express from 'express';
import { adminLogin, loginUser, registerUser } from '../controllers/usercontroller.js';



const userRouter = express.Router();


// user routes
userRouter.post('/register' , registerUser);
userRouter.post('/login', loginUser); 
userRouter.post('/admin' , adminLogin);

export default userRouter;