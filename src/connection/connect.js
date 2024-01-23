import mongoose from "mongoose"
import dotenv from 'dotenv'

//For environment variable
dotenv.config()

const connect = async () => {
    try {
        //connection establishment
        const conn = await mongoose.connect(process.env.MONGO_URI)
        conn.connections.map((e) => {
            console.log(`Database ${e.db.databaseName} connected in port ${e.port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

export default connect