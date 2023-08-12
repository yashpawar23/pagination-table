import React from 'react';
import ImageItem from './ImageItem';

const ImageList = ({ images, onDelete }) => {
  return (
    <div className="image-list">
      {images.map(image => (
        <div className='list-images'>
        <ImageItem key={image.id} image={image} onDelete={onDelete} />

        </div>

      ))}
    </div>
  );
};

export default ImageList;