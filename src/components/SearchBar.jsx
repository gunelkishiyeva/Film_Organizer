import React from 'react'
import './SearchBar.css';
const SearchBar = ({ onSubmit }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // getting form
    const form = e.target;

    // getting form's data
    const formData = new FormData(form);
    const searchString = formData.get('search');

    // use parent's handler function to setting his state.
    onSubmit(searchString);
  }

  return (
<div className="search-box">
    <form className="search-box__form" onSubmit={handleSubmit}>
       <label className="search-box__form-label">
       Search movie by title:
      <input  className="search-box__form-input" name='search' type='search' placeholder="For example, Shawshank Redemption"/>  
      </label>
      <button type='submit' className="search-box__form-submit">Search</button>
    </form>
    </div>
  )
}

export default SearchBar;