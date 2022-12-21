import { Sequelize, DataTypes } from 'sequelize'
import * as path from "path"
import dotenv from "dotenv";
const localPath = path.resolve("./.env")
dotenv.config({path:localPath})
const sequelize = new Sequelize(process.env.DB_URI);

const Item = sequelize.define('Item',{
    itemName:{
        type:DataTypes.STRING,
        require:true
    },
    qty:{
        type:DataTypes.INTEGER,
        require:true
    }
})

Item.sync()

export default Item;
