import { generateHashPassword, jwtLogin } from "../middlewares/jwtlogin.js";
import { User } from "../model/user.schema.js"
import jwt from 'jsonwebtoken'

const getUser = async (req, res) => {
    const user = await User.find();
    res.send({ data: user })
}

const createUser = async (req, res) => {
    const { name, email, password } = req.body
    const hashP = await generateHashPassword(password);
    const user = new User({
        name,
        email,
        password: hashP
    })
    try {
        const users = await user.save()
        console.log(users);
        const token = await jwtLogin(users)
        console.log(token);
        res.send({ data: users, token: token })
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async (req, res) => {
    try {
        const user = await User.find({ email: req.body.email });
        if (!user) {
            res.status(400).send({ message: 'user not found' });
        }
        const token = req.headers.authorization.split(" ")[1];
        var decoded = await jwt.verify(token, process.env.SECRET);
        if (decoded) {
            res.send({ decoded: decoded })
        }
        res.send({ message: 'Invalid Token' })

    } catch (error) {
        res.send({ error: error })
    }
}

const deleteUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id)
        res.send({ data: user })
    } catch (error) {
        console.log(error);
    }

}

export { getUser, createUser, deleteUserById, loginUser }