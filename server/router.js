let router = require('express').Router();
let searchController = require('./searchController.js');

router
  .route('/search')
  .get(searchController.displaySearch);

module.exports = router;