import express from "express";
import dotenv from 'dotenv'
import userRouter from "./src/routes/user.route.js";


const app = express();
//Configuration for environment files
dotenv.config()

const port = process.env.PORT || 3000

app.use(express.json());
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
    res.status(200).send({ message: "Home Page" })
})
app.listen(port, (req, res) => {
    console.log(`SERVER RUNNING ON PORT ${port}`);
})
