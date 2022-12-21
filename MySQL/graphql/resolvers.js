import User from "../models/User.js";
import Item from "../models/Item.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
const resolvers = {
     Query:{
         users:async()=>await User.findAll(),
         user:async(_,{_id})=>await User.findOne({_id}),
         items:async()=>await Item.findAll(),
         item:async(_,{_id})=>await Item.findOne({_id}),
         getUserForItem:async(_,{purchasedBy})=>await Item.find({purchasedBy})
     },
     Mutation:{
        createUser:async(_,{userInp})=>{
            const {name,email,password} = userInp
            const newPassword = await bcryptjs.hash(password,12);
            const newUser = await User.create({
                name,
                email,
                password:newPassword
            })
            const data = await newUser.save();
            return data;
        },
        signInUser:async(_,{userSignIn})=>{
            const {email,password} = userSignIn
            const user = await User.findOne({email})
            if(user){
                const match = await bcryptjs.compare(password,user.password)
                if(match){
                    const token = jwt.sign({userId:user._id},"qweerrtyytgdfvnfvdfjverv")
                    return {data:token};
                }else{
                    return {data:"Invalid Credentials !!!"}
                }
            }
        },
        purchasedItem:async(_,{itemName,qty},{userId})=>{
            const newItem = await Item.create({
                itemName,
                qty,
                purchasedBy:userId
            })
            await newItem.save();
            return "Item Saved Successfully !!!"
        }
     }
 }
export default resolvers; 