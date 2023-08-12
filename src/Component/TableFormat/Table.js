import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Table.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';
import { NavLink } from 'react-bootstrap';


function Table(props) {

  const { title, description, price, rating, thumbnail } = props;

  const [data, setData] = useState([])
  console.log(data)

  const [newImages, setnewImages] = useState([])
  const [newName, setnewName] = useState([])



  const [pageData, setPageData] = useState([])
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)

  const getData = async () => {
    const response = await axios.get('https://dummyjson.com/products')
    console.log(response.data.products)
      setData(response.data.products)
  }
  useEffect(() => {
    getData()
  }, [page])

  // handle next
  const handleNext = () => {
    if (page === pageCount) return page;
    setPage(page + 1)
  }

  // handle previous
  const handlePrivious = () => {
    if (page === 1) return page;
    setPage(page - 1)
  }

  useEffect(() => {
    const pagedatacount = Math.ceil(data.length / 6);
    setPageCount(pagedatacount);

    if (page) {
      const LIMIT = 6;
      const skip = LIMIT * page // 5 *2 = 10
      const dataskip = data.slice(page === 1 ? 0 : skip - LIMIT, skip);
      setPageData(dataskip)
    }
  }, [data])

  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className='Addimages-div'>
        <Form className="d-flex" onSubmit={handleSubmit}>
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
            onChange={(e) => setnewName(e.target.value)}
          />
          <Button variant="outline-success" className=" addbtn">Add New</Button>
        </Form>
      </div>
      <div className='card_wrapper'>
        {pageData.length > 0 ?
          pageData.map((userData, index) => {
            return (
              <Card style={{ width: '18rem' }} key={index}>
                <Card.Img variant="top" src={userData.thumbnail} style={{width:250,height:250,margin:17}} />
                <Card.Body>
                  <NavLink to='/singleCard' state={{title:title, description:description, price:price, rating:rating, thumbnail:thumbnail}}>
                  <Card.Text>
                    {userData.title}
                  </Card.Text>
              </NavLink>
                </Card.Body>
              </Card>

            )
          }) :
          <div className='d-flex justify-content-center mt-4'>
            Loading... <Spinner animation="border" variant='danger' />
          </div>
        }
      </div>
      <div className='pagination_div'>
        <Pagination>
          <Pagination.Prev onClick={handlePrivious} disabled={page === 1} />

          {
                            Array(pageCount).fill(null).map((ele, index) => {
                                return (
                                    <>
                                        <Pagination.Item active={page === index + 1 ? true : false} onClick={() => setPage(index + 1)}>{index + 1}</Pagination.Item>
                                    </>
                                )
                            })
                        }

          <Pagination.Next onClick={handleNext} disabled={page === pageCount} />
        </Pagination>
      </div>

    </>
  );
}

export default Table;
