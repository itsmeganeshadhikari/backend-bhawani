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

export { jwtLogin, generateHashPassword }