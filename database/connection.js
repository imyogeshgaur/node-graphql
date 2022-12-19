import {connect} from "mongoose";
import { set } from "mongoose";

set('strictQuery', false)

const connectToDB = () => {
    try {
        connect(process.env.MONGO_URI)
        console.log("Connected Successfully !!!")
    } catch (error) {
        console.log(error)
    }
}

export default connectToDB;