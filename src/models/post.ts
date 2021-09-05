import mongoose from "../../db";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        requied: true
    },
    description:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'users'
    }
}, {
    timestamps: true
})

const posts = mongoose.model("posts", postSchema);

export default posts