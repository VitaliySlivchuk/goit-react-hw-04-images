import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';

import Searchbar from './Searchbar/Searchbar';

import { AppCss } from './App.styled';

export const App = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <AppCss>
      <Searchbar onSubmit={setSearchText} />
      <ImageGallery searchText={searchText} />

      <ToastContainer />
    </AppCss>
  );
};
