import express from 'express';
import userModel from './models/user.js';
import postModel from './models/post.js';

const app = express();

app.get("/",function(req,res){
    res.send("Working");
})

app.get("/create",async function(req,res){
    let createdUser = await userModel.create({
       username: "faiz",
       age: 25,
       email:"faizan@gmail.com"
    })
    res.send(createdUser)
})

app.get("/post/create",async function(req,res){
    let post = await postModel.create({
        postdata:"Hello how are you all",
        user:"6ac4d87d46dfb77eb28d1937"
    })

    let user = await userModel.findOne({_id:"6ac4d87d46dfb77eb28d1937"})
    user.posts.push(post._id)
    await user.save()
    res.send({post,user})
})

app.listen(3000)