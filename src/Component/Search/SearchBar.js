import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Search.css'

const SearchBar = () => {
  return (
    <div className='Addimages-div'>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Add Image"
              className="me-2 searchBar"
              aria-label="Search"
            />
            <Form.Control
              type="search"
              placeholder="Add Title"
              className="me-2 searchBar" 
              aria-label="Search"
            />
            <Button variant="outline-success" className=" addbtn">Add New</Button>
          </Form>
    </div>
  )
}

export default SearchBar