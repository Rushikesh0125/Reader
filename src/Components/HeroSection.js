import './Hero.css';
import React from 'react'
import { Col, Container } from 'reactstrap';
import Cards from './Cards';
import Card_Data from '../Data/CardData';
import TextArea from './TextArea';

const HeroSection = () => {
  return (
    <Container className='hero-cont'>
      <TextArea/>
    </Container>
  )
}

export default HeroSection

// {/* {
//         Card_Data.map((item) => (
//           <Col lg='3' md='4' sm='6' className="card-div" key={item}>
//             <Cards item ={item} />
//           </Col>
//         ))
//       } */}