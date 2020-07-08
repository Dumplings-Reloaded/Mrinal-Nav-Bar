const { productModel, popularSuggestionsModel, categoryModel, pagesModel } = require('./index.js');

let model = {
  // fetches search result
  fetchSearchData: (query, callback) => {
    let { search } = query
    // stores search data here
    let searchData = {}

    // adds 3 Products from DB to searchData
    // adds 3 Pages from DB to searchData
    // adds 3 categories from DB to searchData
    // adds 4 Popular Suggestions from DB to searchData
    // searchData is JSON.obj being passed to client!

    productModel.find({
      name: {
        $regex: `${search}`,
        $options: 'i'
      }
    }).limit(3).exec()
      .then((results) => {
        searchData.products = results;
      })

      .then(() => {
        pagesModel.find({
          page_name: {
            $regex: `${search}`,
            $options: 'i'
          }
        }).limit(3).exec()
          .then((results) => {
            searchData.pages = results;
          })

          .then(() => {
            categoryModel.find({
              page_name: {
                $regex: `${search}`,
                $options: 'i'
              }
            }).limit(3).exec()
              .then((results) => {
                searchData.categories = results;
              })

              .then(() => {
                popularSuggestionsModel.find({
                  page_name: {
                    $regex: `${search}`,
                    $options: 'i'
                  }
                }).limit(4).exec()
                  .then((results) => {
                    searchData.popularSuggestions = results;
                  })

                  .then(() => {
                    callback(null, searchData)
                  })
              })
          })
      })
      .catch(err => console.log(err))

  }
};

module.exports = model;

