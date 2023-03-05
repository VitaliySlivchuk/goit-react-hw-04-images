import PropTypes from 'prop-types';

import { ImageGalleryItemCss, ImageGallery } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL, togle }) => {
  return (
    <ImageGalleryItemCss
      className="gallery-item"
      id={id}
      onClick={() => togle(id)}
    >
      <ImageGallery src={webformatURL} alt={id} width={100} />
    </ImageGalleryItemCss>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  togle: PropTypes.func.isRequired,
};
