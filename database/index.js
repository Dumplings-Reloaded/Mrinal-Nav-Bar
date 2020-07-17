const mongoose = require('mongoose');
const SimpleSchema =  require('simpl-schema');
const mongodb = require('mongodb');
const { createProducts, createMiscPages } = require('./seed.js');

let url = 'mongodb://localhost/navbar'; // connect to local DB: "navbar"
//mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongodb.MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});

let Schema = mongoose.Schema;

// create product schema
let productSchema = new Schema({
  name: {type: String},
  price: {type: Number},
  img: {type: String},
});

// create the 3 misc. section schema
// let popularSuggestionSchema = new SimpleSchema({ page_name: String });
// let categorySchema = new SimpleSchema({ page_name: String });
// let pagesSchema = new SimpleSchema({ page_name: String });

let productModel = mongoose.model('Products', productSchema);
// let popularSuggestionsModel = mongoose.model('Popular_Suggestions', popularSuggestionSchema);
// let categoryModel = mongoose.model('Category', categorySchema);
// let pagesModel = mongoose.model('Pages', pagesSchema);


module.exports = {
  productModel
  // , popularSuggestionsModel, categoryModel, pagesModel
};