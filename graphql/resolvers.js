import User from "../models/User.js";
import Item from "../models/Item.js";

const resolvers = {
    // Query:{
    //      users:()=>users,
    //      user:(_,{id})=>users.find(usr=>usr._id==id),
    //      items:()=>items,
    //      item:(_,{itemid})=>items.find(itm=>itm._id==itemid)
    //  },
    //  User:{
    //      items:(ur)=>items.filter(item=>item.purchasedBy === ur._id)
    //  },
     Mutation:{
        createUser:async(_,{userInp})=>{
            const newUser = await User.create({
                ...userInp
            })
            console.log(newUser)
            const data = await newUser.save();
            return data;
        }
     }
 }
export default resolvers; 