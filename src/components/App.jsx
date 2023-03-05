import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';

import Searchbar from './Searchbar/Searchbar';

import { AppCss } from './App.styled';

export default class App extends Component {
  state = {
    searchText: '',
  };

  handleSubmit = searchText => {
    this.setState({ searchText });
  };

  render() {
    const { handleSubmit } = this;
    const { searchText, page } = this.state;
    return (
      <AppCss>
        <Searchbar onSubmit={handleSubmit} />
        <ImageGallery searchText={searchText} page={page} />

        <ToastContainer />
      </AppCss>
    );
  }
}
