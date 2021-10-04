const express= require("express");
const connectionDB = require("./mongo");
const Model= require('./schema');
const router = express.Router();
var cors = require('cors')

const app= express();
app.use(cors());

const port = process.env.Port || 4000;

connectionDB();

app.get('/', (req,res)=>{

  Model.find().then((result)=>{
    res.send(result);
  }).catch((err)=>{
    console.log(err);
  })
})


app.listen(port,()=>{console.log({port})});