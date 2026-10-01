import express from 'express'
import userModel from './usermodel.js'

const app = express();


app.get('/',(req,res)=>{
    res.send('hey');
})

app.get('/create',async (req,res)=>{
    let createduser = await userModel.create({
        name: "faizan",
        email: "faizan0601",
        username: "faizan__"
    })
    res.send(createduser)
})



app.get('/update',async (req,res)=>{
    let updateduser = await userModel.findOneAndUpdate({username:"faizan__"},{name:"faizan ali"},{new:true})
    res.send(updateduser)
})

app.get('/read',async (req,res)=>{
   let users =  await userModel.find()
   res.send(users)
})

app.get('/delete',async (req,res)=>{
   let users = await userModel.findOneAndDelete({username:"ayan123"})
   res.send(users)
})



app.listen(3000);