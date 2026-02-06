const express = require('express')

const postRouter=require('./routes/posts.routes')
const app = express()

app.get('/',(req,res) => {
  res.send("Welcome to the home page");
})

app.use("/api/v1/posts",postRouter)

const PORT =3000

app.listen(PORT,() => {
  console.log(`Server is running at http://localhost:${PORT}`)
});
