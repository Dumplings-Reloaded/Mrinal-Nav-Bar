const aws = require("aws-sdk");
const config = require('../config/config.json');
const { productModel, popularSuggestionsModel, categoryModel, pagesModel, seedItemsIntoModel } = require('./seedGenerator.js');
const { createMiscPages } = require('./seed.js');
const faker = require('faker');
const mongoose = require('mongoose');

let url = 'mongodb://localhost/navbar';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

(async function () {

  try {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: config.aws.accessKey,
      secretAccessKey: config.aws.secretKey,
      region: 'us-west-1'
    })

    const s3 = new aws.S3();
    const response = await s3.listObjectsV2({
      Bucket: "aloyoganavbar"
    }).promise()

      .then(function (data) {

        let createProducts = () => {
          let productList = [];

          // creates obj w/ name, price, img
          for (let i = 0; i < data.Contents.length; i++) {
            let productObj = {
              name: faker.commerce.product(),
              price: Math.floor(Math.random() * 100) + 50,
              img: `https://aloyoganavbar.s3-us-west-1.amazonaws.com/${data.Contents[i].Key}`
            };

            productList.push(productObj);
          }

          return productList;
        }

        // creates list of products items and of pg names in 3 sections
        let allProducts = createProducts();
        let allPopularSuggestions = createMiscPages();
        let allCategories = createMiscPages();
        let allPages = createMiscPages();

        // seed items into its correct models
        seedItemsIntoModel(allProducts, productModel);
        seedItemsIntoModel(allPopularSuggestions, popularSuggestionsModel);
        seedItemsIntoModel(allCategories, categoryModel);
        seedItemsIntoModel(allPages, pagesModel);
      }).catch(err => console.log(err))
  }
  catch (err) { console.error(err) }

})();