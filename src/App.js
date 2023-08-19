import React, {  useState } from 'react';
import './App.css';
import axios from 'axios';
import ImageList from './Component2/ImageList';
// import ImageForm from './ImageForm'; //image form commented
import ImageAdd from './Component2/ImageAdd';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';


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

  const handleDelete = (imageId) => {
    setImages(prevImages => prevImages.filter(image => image.id !== imageId));
  };

  return (
    <>
    <div className="App">
      <h1 className='header-text'>Image Gallery</h1>
      <button onClick={fetchImages} className='loadImg-btn'>Load Images</button>
      <ImageAdd />
      <ImageList images={images} onDelete={handleDelete} />
    </div>
    <div>

    <div className='pagination-icon'>
    <Pagination>
          <Pagination.Prev   />
            <Pagination.Item >{1}</Pagination.Item>
          <Pagination.Next   />
        </Pagination> 
    </div>

    
    </div>
    </>
  );
}

export default App;
