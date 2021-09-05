import { Router } from "express";
import UserController from "../controllers/usercontroller";

const userRouter= Router();
const userController: UserController= new UserController();

userRouter.get('/', userController.get);
userRouter.post('/', userController.post);

export default userRouter;