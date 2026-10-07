import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    postdata: String,
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    date:{
        type:Date,
        default: Date.now()
    }
})

let postModel = mongoose.model('post',postSchema);

export default postModel;