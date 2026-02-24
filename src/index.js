const express = require('express')
const cors=require('cors')
const postRouter=require('./routes/posts.routes')
const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res) => {
  res.send("Welcome to the home page");
})

app.use("/api/v1",postRouter)

const PORT =3000

app.use((err,req,res,next) => {
  let statuscode = err.statuscode;
  if(statuscode==1100){
    return res.status(400).json({ message: "Duplicate field value entered" });
  }
  else if(statuscode==404){
    return res.status(404).json({
      message:'File not found'
    })
  }
  else{
    return res.status(500).json({
      message:'Internal server error'
    })
  }
})

app.listen(PORT,() => {
  console.log(`Server is running at http://localhost:${PORT}`)
});
