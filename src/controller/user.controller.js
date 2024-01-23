import { User } from "../model/user.schema.js"

const getUser = async (req, res) => {
    const user = await User.find();
    res.send({ data: user })
}

const createUser = async (req, res) => {
    const { name, email, password } = req.body
    const user = new User({
        name,
        email,
        password
    })
    try {
        const users = await user.save()
        res.send({ data: users })
    } catch (error) {
        console.log(error);
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

export { getUser, createUser, deleteUserById }