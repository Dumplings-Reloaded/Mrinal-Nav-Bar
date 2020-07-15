const { client } = require('./index.js');

const model = {
  getData: (callback) => {
    client.query(`SELECT * FROM products`, (err, result) => {
      if(err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  postData: (body, callback) => {
    client.query(`INSERT INTO products (name, price, img) VALUES ('${body.name}', ${body.price}, '${body.img}');`, (err, result) => {
      if(err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },

  updateData: (id, body, callback) => {
    client.query(`UPDATE products SET name = '${body.name}', price = ${body.price}, img = '${body.img}' WHERE id=${id}`, (err, result) => {
      if(err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },

  deleteData: (id, callback) => {
    client.query(`DELETE FROM products WHERE id = ${id}`, (err, result) => {
      if(err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  }

}

module.exports = model;