import React from 'react';
import axios from 'axios';
import SearchData from './Search/SearchData.jsx';
import BoldSearch from './Search/search-bold.jsx';
import RegularSearch from './Search/search-regular.jsx';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: '',
      popularSuggestions: [],
      categories: [],
      pages: [],
      products: [],
      searchWasClicked: false,
    }

    this.fetchSearchData = this.fetchSearchData.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleSearchIcon = this.toggleSearchIcon.bind(this);
  }

  // Gets search results from DB
  fetchSearchData() {
    axios
      .get(`/search`, {
        params: { search: this.state.searchResults }
      })
      .then(response => {
        let { categories, pages, popularSuggestions, products } = response.data
        // ES6 Magic!! same as setting {pages: pages}
        this.setState({ popularSuggestions, categories, pages, products })
      })
  }

  // fetches data based on user input after 500 ms.
  handleSearch(e) {
    this.setState({ searchResults: e.target.value }, () => {
      setTimeout(() => { this.fetchSearchData(); }, 500);
    })
  }

  // toggles between search status
  toggleSearchIcon() { this.setState({ searchWasClicked: !this.state.searchWasClicked }) }

  render() {
    let { searchResults, popularSuggestions, categories, pages, products, searchWasClicked } = this.state;

    let logo = (!searchWasClicked) ? <RegularSearch /> : <BoldSearch />

    // render input field based on icon click status
    let inputField = !searchWasClicked ? null : <input className="search-input-field" type="search" placeholder="Search" onChange={(e) => this.handleSearch(e)} />;

    // render search results in input exists && icon is active
    // render hardcoded message if icon is active, but no input exists
    // don't render anything if icon is not active.
    let showSearchResults = (searchResults.length > 0) ?
      <SearchData data={this.state} /> :
      (searchWasClicked) ?
        <div className="search-results-inner empty">
          <em>Start typing for instant search results</em>
        </div> : null;

    return (
      <li className="search-icon">
        <div className="search-icon-and-field">
          <div className="search-logo" onClick={this.toggleSearchIcon}>
            {logo}
          </div >
          {inputField}
        </div>

        <div className="search-results">{showSearchResults}</div>
      </li >
    )
  }
}