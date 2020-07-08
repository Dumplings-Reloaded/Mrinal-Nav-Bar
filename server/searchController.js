let model = require('../database/model.js');

let searchController = {
  displaySearch: (req, res) => {
    model.fetchSearchData(req.query, (err, searchResults) => {
      err ? console.log(err) : res.status(200).json(searchResults);
    });
  }
};

module.exports = searchController;