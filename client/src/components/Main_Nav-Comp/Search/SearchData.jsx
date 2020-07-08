import React from 'react';

const SearchData = (props) => {
  let { popularSuggestions, categories, pages, products } = props.data;

  return (
    <div className="search-results-inner">
      {console.log(products)}
      <ul>

        <li className="result-label">Popular Suggestions</li>
        {popularSuggestions.map((suggestion, index) => {
          return (<li className="search-suggestions" key={index}>{suggestion.page_name}</li>)
        })}

        <li className="result-label">Categories</li>
        {categories.map((category, index) => {
          return (<li className="search-categories bolded" key={index}>{category.page_name}</li>)
        })}

        <li className="result-label">Pages</li>
        {pages.map((page, index) => {
          return (<li className="search-pages" key={index}>#{page.page_name}</li>)
        })}

        <li className="result-label">Products</li>
        {products.map((product, index) => {
          return (<li className="search-products" key={index}>
            <span className="search-products-thumbnail">
              <img src={product.img} className="search-products-image" />
            </span>
            <span className="search-products-info">
              <span className="search-products-name">{product.name}</span>
              <span className="search-products-price">${product.price}.00</span>
            </span>
          </li>)
        })}
      </ul>
    </div>
  )
}

module.exports = SearchData;