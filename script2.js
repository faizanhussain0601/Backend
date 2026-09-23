import express from 'express'

const app = express()

app.use(function(req,res,next){
    console.log("middleware chala");
    next()
})

app.use(function(req,res,next){
    console.log("middleware chala ek or baar");
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('about page hai yeh')
})

app.get('/profile', (req, res,next) => {
  return next(new Error("something went wrong"))
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});




app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})