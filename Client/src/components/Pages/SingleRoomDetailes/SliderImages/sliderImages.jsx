import React, { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import '../SliderImages/sliderImages.css'

function SliderImages(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages]= useState(props.images);


  const openImageViewer = ((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  });

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          // width="300"
          key={ index }
          className="imageStyle"
          // style={{ margin: '2px' }}
          />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          onClose={ closeImageViewer }
        />
      )}
    </div>
  );
}

export default SliderImages;
