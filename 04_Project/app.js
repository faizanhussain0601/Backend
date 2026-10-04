import express from 'express'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const app = express()

app.use(cookieParser())

app.get("/",function(req,res){
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("polololo", salt, function(err, hash) {
        //  console.log(hash)
    });
});
bcrypt.compare("polololo", "$2b$10$TEE8lZOyJC4IVPz8.oSPyOYdR333htbAd6L0Amvt6MxFBQYp0GeYS", function(err, result) {
  // console.log(result)
});

  let token = jwt.sign({email:"faizan@gmail.com"},"secret")
  res.cookie("token",token)
  // console.log(token)
  

   res.send("Cookie created")

})

app.get("/read",function(req,res){
  let data = jwt.verify(req.cookies.token,"secret");
  console.log(data)
})


app.listen(3000);