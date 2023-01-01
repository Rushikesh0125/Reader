import './Hero.css';
import React from 'react'
import { Container } from 'reactstrap';
import Cards from './Cards';

const HeroSection = () => {
  return (
    <Container className='hero-cont'>
      <Cards/>
    </Container>
  )
}

export default HeroSection