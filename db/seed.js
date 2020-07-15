const { client } = require ('./index.js');
const faker = require('faker');
const fs = require('fs');

var generateName = () => {
  var nameArray = [
    "Shuriken", "Shirt", "Yoga Pants", "Sweater", "T-shirt", "Shorts", "Shoes",
    "Hats", "Swords", "Kunai", "Scythe", "Yoga Mat", "Coat", "Jacket", "Stealth Mask"
  ];

  return(nameArray[Math.floor(Math.random() * 15)]);
}

var generatePrice = () => {
  return Math.floor((Math.random() * 150) + 1);
}

var generateImg = () => {
  return "https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1176299915-2048x2048.jpg";
}

var generateSeed = () => {
  const writeContent = fs.createWriteStream('./content.csv');
  writeContent.write('id,name,price,img\n', 'utf8');

  function writeTenMillion(writer, encoding, callback) {
    let i = 10000000;
    let id = 0;

    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        const data = `${id}, '${generateName()}', ${generatePrice()}, '${generateImg()}'\n`;
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

// var seed = () => {
//   var count = 0;
//   while(count < 10) {
//     for(var i = 0; i < 1000000; i++) {
//       generateSeed();
//     }
//     count++;
//   }
// }



generateSeed();




