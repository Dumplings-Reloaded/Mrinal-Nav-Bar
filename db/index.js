const { Client } = require('pg');
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

// var pool = new pg({
//   user: 'root',
//   host: 'localhost',
//   database: 'newproducts',
//   password: '',
//   port: 5432
// });

module.exports = { client };

// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: '',
//   host: 'localhost',
//   database: 'SDC',
//   password: '',
//   port: 5432,
// })