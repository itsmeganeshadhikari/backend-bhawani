import express from "express";
import dotenv from 'dotenv'
import userRouter from "./src/routes/user.route.js";
import connect from "./src/connection/connect.js";
import cookieParser from "cookie-parser";

const app = express();
//Configuration for environment files
dotenv.config()

const port = process.env.PORT || 3000

app.use(express.json());
connect()
app.use("/api/user", userRouter)
app.use(cookieParser())

//For mongo db connection

app.get("/", (req, res) => {
    res.status(200).send({ message: "Home Page" })
})
app.listen(port, (req, res) => {
    console.log(`SERVER RUNNING ON PORT ${port}`);
})
