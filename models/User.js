import { model, Schema } from "mongoose";

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: "Item"
    }
})

const User = model("User", userSchema);
export default User;