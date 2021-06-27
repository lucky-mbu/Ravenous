import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  "Best Match": 'best_match',
  "Highest Rated": 'rating',
  "Most Reviewed": 'review_count'
}

 class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(keyzz => {
      let sortByOptionValue = sortByOptions[keyzz];
      return <li key={sortByOptionValue}>{keyzz}</li>;
    });
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
          {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <button href='#'>Let's Go</button>
        </div>
      </div>
    );
  }
}
export default SearchBar;