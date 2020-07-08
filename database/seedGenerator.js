const mongoose = require('mongoose');
const aws = require("aws-sdk");
const config = require('../config/config.json');

// sees if Nav_Bar exists
// then connect to that DB
let url = 'mongodb://localhost/Nav_Bar';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

let Schema = mongoose.Schema;

// create product schema + 3 misc. schema labeled as is
let productSchema = new Schema({
  name: String,
  price: Number,
  img: String,
});

let popularSuggestionSchema = new Schema({ page_name: String });
let categorySchema = new Schema({ page_name: String });
let pagesSchema = new Schema({ page_name: String });


// create model for all products
let productModel = mongoose.model('Products', productSchema);
let popularSuggestionsModel = mongoose.model('Popular_Suggestions', popularSuggestionSchema);
let categoryModel = mongoose.model('Category', categorySchema);
let pagesModel = mongoose.model('Pages', pagesSchema);


// seed items into respective models db
let seedItemsIntoModel = (items, model) => {
  let itemList = [];

  // iterate through all items
  // create unit with object
  // push each unit into itemsList
  items.forEach(item => {
    let unit = new model(item);
    itemList.push(unit);
  });

  // inserts the itemList into DB
  model.insertMany(itemList, (err) => {
    err ? console.log(err) : console.log('unit was seeded');
  });
}

let seedModelAndMethods = {
  productModel, popularSuggestionsModel, categoryModel, pagesModel, seedItemsIntoModel
}

module.exports = seedModelAndMethods;