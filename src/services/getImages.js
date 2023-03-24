const BASE_URL = 'https://pixabay.com/api/';
const KEY = '32799595-4883f30010edd47462b21129f';
const config = '&image_type=photo&orientation=horizontal&per_page=12';

export const getImages = (searchText, page) => {
  return fetch(`${BASE_URL}?q=${searchText}&page=${page}&key=${KEY}${config}`);
};
