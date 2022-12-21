import { model, Schema } from "mongoose";

const itemSchema = Schema({
    itemName: {
        type: String,
        required: true
    },
    qty: {
        type: String,
        required: true,
        unique: true
    },
    purchasedBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

const Item = model("Item", itemSchema);
export default Item;