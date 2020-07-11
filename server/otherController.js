let model = require('../db/model.js');

let otherController = {
  displaySearch: (req, res) => {
    model.getData((err, result) => {
      if(err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result.rows);
      }
    })
  },

  addSearch: (req, res) => {
    model.postData(req.body, (err, result) => {
      if(err) {
        res.status(404).send(err);
      } else {
        res.send("Posted");
      }
    })
  },

  updateSearch: (req, res) => {
    model.updateData(req.params.id, req.body, (err, result) => {
      if (err) {
        res.status(403).send(err);
      } else {
        res.send("Updated");
      }
    })
  },

  deleteSearch: (req, res) => {
    model.deleteData(req.params.id, (err, result) => {
      if (err) {
        res.status(409).send(err);
      } else {
        res.send("Deleted");
      }
    })
  }
}

module.exports = otherController;