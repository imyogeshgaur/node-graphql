import { Sequelize, DataTypes } from 'sequelize'
import * as path from "path"
import dotenv from "dotenv";
const localPath = path.resolve("./.env")
dotenv.config({path:localPath})
const sequelize = new Sequelize(process.env.DB_URI);

const User = sequelize.define('User',{
    name:{
        type:DataTypes.STRING,
        require:true
    },
    email:{
        type:DataTypes.STRING,
        require:true
    },
    password:{
        type:DataTypes.STRING,
        require:true
    }
})
User.sync()

export default User;