const { Client } = require('pg');
require('pg-essential').patch({ Client });

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'newproducts',
  password: 'password',
  port: 5432
});

client.connect();

client.query('SELECT $1::text as message', ['DB Connected!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  // client.end()
})


module.exports = { client };

