import express from 'express'
import { createUser, deleteUserById, getUser } from '../controller/user.controller.js';

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUserById);

export default userRouter;