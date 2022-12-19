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
    }
})

const Item = model("Item", itemSchema);
export default Item;