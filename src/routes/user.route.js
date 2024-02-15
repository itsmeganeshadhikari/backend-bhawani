import express from 'express'
import { createUser, deleteUserById, getUser, loginUser } from '../controller/user.controller.js';
import { authGuard } from '../middlewares/jwtlogin.js';

const userRouter = express.Router();

userRouter.get("/", authGuard, getUser);
userRouter.post("/", authGuard, createUser);
userRouter.post("/login", loginUser);
userRouter.delete("/:id", authGuard, deleteUserById);

export default userRouter;