import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';




function Viewrest() {
  const urlParams = useParams()
  console.log(urlParams); //{id: '3'}
  console.log(urlParams.id); //3

  // create a state
  const [AllRestaurants, setAllRestaurants] = useState([]);

  // fuction to call API to get data from restaurants.json
  const getRestaurants = async () => {
    await fetch('/restaurants.json')
      .then((data) => {
        data.json()
          .then((result) => {
            // console.log(result); //array of data in console
            setAllRestaurants(result.restaurants) //10

          })
      })
  }
  console.log(AllRestaurants);
  useEffect(() => {
    getRestaurants()
  }, [])

  const viewrest = AllRestaurants.find(item => item.id == urlParams.id)
  console.log(viewrest);
  return (
    <>
      {
        viewrest ? (
          <Row className='m-3'>
            <Col className='ms-5' md={4}>
              <Image src={viewrest.photograph} fluid />
            </Col>
            <Col md={7}>
              <ListGroup>
                <ListGroup.Item><h1>{viewrest.name}</h1></ListGroup.Item>
                <ListGroup.Item><h3>{viewrest.cuisine_type}</h3></ListGroup.Item>
                <ListGroup.Item><h5>{viewrest.neighborhood}</h5></ListGroup.Item>
                <ListGroup.Item><h6>{viewrest.address}</h6></ListGroup.Item>
                <ListGroup.Item><Restop operate={viewrest.operating_hours} /></ListGroup.Item>
                <Restreview review ={viewrest.reviews}/>
              </ListGroup>
            </Col>

          </Row>
        ) : 'null'
      }
    </>
  )
}

export default Viewrest