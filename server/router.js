let router = require('express').Router();
let searchController = require('./searchController.js');

router
  .route('/search')
  .get(searchController.displaySearch);

router
  .route('/get')
  .get(searchController.getSearch);

router
  .route('/post')
  .post(searchController.addSearch);

router
  .route('/update/:id')
  .put(searchController.updateSearch);

router
  .route('/delete/:id')
  .delete(searchController.deleteSearch);

module.exports = router;