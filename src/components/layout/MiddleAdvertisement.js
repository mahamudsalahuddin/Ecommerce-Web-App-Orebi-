import Container from './Container'
import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'
const MiddleAdvertisement = () => {
  return (
    <div className='md:mt-32'>
        <Container>
            <Link to="#">
                <Image imgsrc="assets/middleAdd.png"/>
            </Link>
        </Container>
    </div>
  )
}

export default MiddleAdvertisement