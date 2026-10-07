import mongoose  from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/testingthedatabase")

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        }
    ]
})

let userModel = mongoose.model('user',userSchema);

export default userModel;