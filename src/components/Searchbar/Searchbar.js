import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { toast } from 'react-toastify';

import {
  SearchbarCss,
  SearchFormCss,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.currentTarget.value.toLowerCase());

  const handleFormSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast('No data');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchbarCss className="searchbar">
      <SearchFormCss className="form" onSubmit={handleFormSubmit}>
        <SearchFormButton type="submit" className="button">
          <FaSearch />
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchText"
          value={query}
          onChange={handleChange}
        />
      </SearchFormCss>
    </SearchbarCss>
  );
};

export default Searchbar;
