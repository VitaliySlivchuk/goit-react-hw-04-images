import React, { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';
import { getImages } from 'services/getImages';

import Button from '../LoadMoreBtn/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Modal } from '../Modal/Modal';

import { ImageGalleryCss } from './ImageGallery.styled';

export const ImageGallery = ({ searchText }) => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalItem, setModalItem] = useState(false);

  useEffect(() => {
    setQuery(searchText);
    setImages([]);
    setPage(1);
  }, [searchText]);

  useEffect(() => {
    if (searchText === '') {
      return;
    }
    setLoader(true);
    async function fetchData() {
      try {
        const response = await getImages(searchText, page);
        const imagesData = await response.json();
        setImages(prev => [...prev, ...imagesData.hits]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchData();
  }, [query, page]);

  const handleButtonClick = () => {
    setPage(prev => prev + 1);
  };

  const togleImage = imageId => {
    images.find(
      image => image.id === imageId && setModalItem(image),
      setModal(true)
    );
  };

  const toggleModal = () => {
    setModal(false);
  };

  return (
    <>
      {modal && (
        <Modal onClose={toggleModal}>
          <img src={modalItem.largeImageURL} alt={modalItem.tags} />
        </Modal>
      )}
      {images.length > 0 && (
        <ImageGalleryCss className="gallery">
          {images.map(({ id, webformatURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                id={id}
                webformatURL={webformatURL}
                togle={togleImage}
              />
            );
          })}
        </ImageGalleryCss>
      )}
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{ margin: '0 auto' }}
        wrapperClass=""
        visible={loader}
      />
      {images.length > 0 && <Button onClick={handleButtonClick} />}
    </>
  );
};

export default ImageGallery;
