const connectDB = require("./db/connect");
const Product = require("./models/products");

const ProductJson = require("./products.json")

const start = async () =>{
     try {
        await connectDB(uri);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("Successfully");
     } catch (error) {
        console.log(error); 
     }
}


start()
