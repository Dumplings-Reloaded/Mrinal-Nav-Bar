let model = require('../database/model.js');

let searchController = {
  displaySearch: (req, res) => {
    model.fetchSearchData(req.query, (err, searchResults) => {
      err ? console.log(err) : res.status(200).json(searchResults);
    });
  },

  getSearch: (req, res) => {
    model.getData((err, searchResults) => {
      err ? console.log(err) : res.status(200).json(searchResults);
    });
  },

  addSearch: (req, res) => {
    model.postData(req.body, (err, postResult) => {
      err ? console.log(err) : res.status(202).json(postResult);
    })
  },

  updateSearch: (req, res) => {
    model.updateData(req.params.id, req.body, (err, updateResult) => {
      err ? console.log(err) : res.status(203).json(updateResult);
    })
  },

  deleteSearch: (req, res) => {
    model.deleteData(req.params.id, (err, deleteResult) => {
      err ? console.log(err) : res.status(204).json(deleteResult);
    })
  }

};

module.exports = searchController;