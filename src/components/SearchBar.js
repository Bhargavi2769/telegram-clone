
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase'; 

const SearchBar = () => (
  <div className="search-bar">
    <div className="search-icon">
      <SearchIcon />
    </div>
    <InputBase
      placeholder="Search"
      inputProps={{ 'aria-label': 'search' }}
      className="input-base"
    />
  </div>
);

export default SearchBar;

