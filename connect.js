const mongoose =  require('mongoose')

uri = "mongodb+srv://Gravity:Nandu2729@cluster0.7fhyyg0.mongodb.net/Cluster0?retryWrites=true&w=majority"

const connectDB =  () =>{
   //  console.log("connected db");
     return mongoose.connect(uri ,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
     });
};

module.exports = connectDB;