const mongoose = require('mongoose')
const mongoPath= "mongodb://localhost:27017/hotelDB";

const connectionDB = async ()=>{

    await mongoose.connect(mongoPath,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
};

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

module.exports = connectionDB;