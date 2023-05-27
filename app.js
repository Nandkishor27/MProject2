// require("dotenv").config();
const express = require('express')
const app = express()
const connectDB = require("../backend/db/connect")
const port = 5000


const products_routes = require("../backend/routes/products")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//middleware or to set router
app.use( "/api/products" , products_routes)

const start = async() =>{
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }
}

start();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})