import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'

dotenv.config();

const saltRounds = 10;
const secret = process.env.SECRET;

const jwtLogin = async (user) => {
    return await jwt.sign({
        user: user
    }, secret, { expiresIn: '1h' });
}

const generateHashPassword = async (password) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    return await bcrypt.hashSync(password, salt);

}

const authGuard = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    var decoded = await jwt.verify(token, process.env.SECRET);
    if (decoded.user[0].role == 'admin') {
        next()
    } else {
        res.status(400).send({ message: 'Invalid role' })
    }
}

export { jwtLogin, generateHashPassword, authGuard }