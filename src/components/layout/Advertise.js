import Container from './Container'
import React from 'react'
import Flex from './Flex'
import { Link } from 'react-router-dom'
import Image from './Image'

const Advertise = () => {
  return (
    <div className='mt-5 md:mt-36'>
        <Container>
            <Flex className="flex gap-x-5 md:gap-x-10">
                <div className='max-w-2/4'>
                    <Link to="#">
                        <Image imgsrc="assets/ad1.png"/>
                    </Link>
                </div>
                <div className='max-w-2/4'>
                    <Link to="#">
                        <Image imgsrc="assets/ad2.png"/>
                    </Link>
                    <Link to="#" className='mt-2 md:mt-9 inline-block'>
                        <Image imgsrc="assets/ad3.png"/>
                    </Link>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Advertise