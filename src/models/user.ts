import mongoose from "../../db";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        requied: true
    },
    password:{
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const users = mongoose.model("users", userSchema);

export default users