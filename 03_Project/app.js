import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userModel from './models/user.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/read',async (req,res)=>{
    let alluser = await userModel.find()
    res.render('read',{users:alluser})
})

app.get('/edit/:userid',async (req,res)=>{
    let user = await userModel.findOne({_id:req.params.userid})
    res.render('edit',{user})
})

app.post('/update/:userid',async (req,res)=>{
    let {name,email,image} = req.body
    let user = await userModel.findOneAndUpdate({_id:req.params.userid},{name,email,image},{new:true})
    res.redirect("/read")
})

app.post('/create',async (req,res)=>{
    let {name,email,image} = req.body;
    let createdUser = await userModel.create({
        name,
        email,
        image
    });
    
    console.log("CREATED:", createdUser);

    res.redirect('/read')
})

app.get('/delete/:id',async (req,res)=>{
    let alluser = await userModel.findOneAndDelete({_id:req.params.id})
    res.redirect('/read')
})

app.listen(3000)