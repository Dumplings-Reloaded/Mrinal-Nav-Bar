let nr = require('newrelic');
let router = require('express').Router();
let otherController = require('./otherController.js');

router
  .route('/search')
  .get(otherController.displaySearch);

router
  .route('/post')
  .post(otherController.addSearch);

router
  .route('/update/:id')
  .put(otherController.updateSearch);

router
  .route('/delete/:id')
  .delete(otherController.deleteSearch);

module.exports = router;