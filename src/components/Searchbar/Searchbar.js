import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';

import { toast } from 'react-toastify';

import {
  SearchbarCss,
  SearchFormCss,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchText: '',
  };

  handleChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value.toLowerCase();
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    if (this.state.searchText.trim() === '') {
      toast('No data');
      return;
    }

    this.props.onSubmit(this.state.searchText);

    this.setState({ searchText: '' });
  };

  render() {
    const { searchText } = this.state;
    const { handleChange, handleFormSubmit } = this;
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
            value={searchText}
            onChange={handleChange}
          />
        </SearchFormCss>
      </SearchbarCss>
    );
  }
}

export default Searchbar;
