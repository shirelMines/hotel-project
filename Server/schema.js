const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const modelSchema = new Schema({
  _id: Number,
  name: String,
  slug: String,
  type: String,
  price: Number,
  size: Number,
  capacity:Number,
  pets: Boolean,
  breakfast: Boolean,
  featured: Boolean,
  description: String,
  extras: Array,
  reviews: Array,
  images:Array
}
);

const Model= mongoose.model('model',modelSchema,'roomInfo');
module.exports= Model;
