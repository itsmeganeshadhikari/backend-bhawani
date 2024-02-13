import express from 'express'
import { createUser, deleteUserById, getUser, loginUser } from '../controller/user.controller.js';

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.post("/", createUser);
userRouter.post("/login", loginUser);
userRouter.delete("/:id", deleteUserById);

export default userRouter;