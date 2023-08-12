import React from 'react';
import './Imagedata.css'

const ImageItem = ({ image, onDelete }) => {
  return (
    <div className="image-item-card">
      <img src={image.urls.thumb} alt={image.alt_description} className='List-images'/>
      <span className='list-desc'>{image.alt_description.toUpperCase()}</span>
      <button onClick={() => onDelete(image.id)} className='deletBtn'>Delete</button>
    </div>
  );
};

export default ImageItem;