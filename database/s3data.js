// const aws = require("aws-sdk");
// const config = require('../config/config.json');
//const { productModel, popularSuggestionsModel, categoryModel, pagesModel, seedItemsIntoModel } = require('./seedGenerator.js');
// const { createMiscPages } = require('./seed.js');
// const faker = require('faker');
// const mongoose = require('mongoose');

// let url = 'mongodb://localhost/navbar';
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// (async function () {

//   const writeContent = fs.createWriteStream('./content2.csv');
//   writeContent.write('id,name,price,img\n', 'utf8');

//   function writeTenMillion(writer, encoding, callback) {
//     let i = 10000000;
//     let id = 0;

//     function write() {
//       let ok = true;
//       do {
//         i -= 1;
//         id += 1;
//         const data = `${id}, '${generateName()}', ${generatePrice()}, '${generateImg()}'\n`;
//         if (i === 0) {
//           writer.write(data, encoding, callback);
//         } else {
//   // see if we should continue, or wait
//   // don't pass the callback, because we're not done yet.
//           ok = writer.write(data, encoding);
//         }
//       } while (i > 0 && ok);
//       if (i > 0) {
//   // had to stop early!
//   // write some more once it drains
//         writer.once('drain', write);
//       }
//     }
//   write()
//   console.log('done');
//   }

//   writeTenMillion(writeContent, 'utf-8', () => {
//     writeContent.end();
//   });

//   // try {
//     aws.config.setPromisesDependency();
//     aws.config.update({
//       accessKeyId: config.aws.accessKey,
//       secretAccessKey: config.aws.secretKey,
//       region: 'us-west-1'
//     })

//     const s3 = new aws.S3();
//     const response = await s3.listObjectsV2({
//       Bucket: "aloyoganavbar"
//     }).promise()

//       .then(function (data) {

//         let createProducts = () => {
//           let productList = [];

//           // creates obj w/ name, price, img
//           for (let i = 0; i < data.Contents.length; i++) {
//             let productObj = {
//               name: faker.commerce.product(),
//               price: Math.floor(Math.random() * 100) + 50,
//               img: `https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1176299915-2048x2048.jpg`
//             };

//             productList.push(productObj);
//           }

//           return productList;
//         }

//         // creates list of products items and of pg names in 3 sections
//         let allProducts = createProducts();
//         let allPopularSuggestions = createMiscPages();
//         let allCategories = createMiscPages();
//         let allPages = createMiscPages();

//         // seed items into its correct models
//         seedItemsIntoModel(allProducts, productModel);
//         // seedItemsIntoModel(allPopularSuggestions, popularSuggestionsModel);
//         // seedItemsIntoModel(allCategories, categoryModel);
//         // seedItemsIntoModel(allPages, pagesModel);
//       }).catch(err => console.log(err))
//   //}
//   // catch (err) { console.error(err) }

// })();

const { productModel, popularSuggestionsModel, categoryModel, pagesModel } = require('./index.js');
const faker = require('faker');
const fs = require('fs');

var generateName = () => {
  var randomName = faker.commerce.product();

  return randomName;
}

var generatePrice = () => {
  var randomPrice = Math.floor(Math.random() * 100) + 50;

  return randomPrice;
}

var generateImg = () => {
  var randomImg = 'shorturl.at/dqAJ3';

  return randomImg;
}

var generateSeed = () => {
  const writeContent = fs.createWriteStream('./database/contentwo.csv');
  writeContent.write('id,name,price,img\n', 'utf8');

  function writeTenMillion(writer, encoding, callback) {
    let i = 10000000;
    let id = 0;

    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        const data = `${id},'${generateName()}',${generatePrice()},'${generateImg()}'\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
  // see if we should continue, or wait
  // don't pass the callback, because we're not done yet.
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
  // had to stop early!
  // write some more once it drains
        writer.once('drain', write);
      }
    }
  write()
  console.log('done');
  }

  writeTenMillion(writeContent, 'utf-8', () => {
    writeContent.end();
  });
}

generateSeed();


