import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import ImageList from './Component2/ImageList';
// import ImageForm from './ImageForm'; //image form commented
import ImageAdd from './Component2/ImageAdd';

function App() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`https://api.unsplash.com/photos?client_id=BTM72ytXvCiHwSX39UKJQcN3qVuokMFyBsFpnzQPFHE`);
      setImages(response.data);
      console.log(images)
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = imageId => {
    setImages(prevImages => prevImages.filter(image => image.id !== imageId));
  };
// for image form commented
  // const handleAdd = newImage => {
  //   setImages(prevImages => [newImage, ...prevImages]);
  // };

  return (
    <div className="App">
      <h1 className='header-text'>Image Gallery</h1>
      {/* <ImageForm onAdd={handleAdd} /> //commented for image form*/}
      <button onClick={fetchImages} className='loadImg-btn'>Load Images</button>
      <ImageAdd />
      <ImageList images={images} onDelete={handleDelete} />
    </div>
  );
}

export default App;
