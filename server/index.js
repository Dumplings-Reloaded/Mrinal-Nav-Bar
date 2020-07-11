const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');
const router2 = require('./pRouter.js');
const db = require('../db/index.js');
const port = 3500;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/', router); // TODO: figure out where route is going to
app.use('/other', router2);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

app.use(express.static(path.join(__dirname, '../public')));