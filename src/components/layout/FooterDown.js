import Container from './Container'
import React from 'react'
import Flex from './Flex'
import {RiFacebookFill} from 'react-icons/ri'
import {TfiLinkedin} from 'react-icons/tfi'
import {FiInstagram} from 'react-icons/fi'

const FooterDown = () => {
  return (
    <div className='bg-[#F5F5F3]'>
        <Container>
            <Flex className="flex flex-col md:flex-row md:justify-between mt-[-10px] pb-5">
                <Flex className="flex gap-4  justify-center">
                    <div><RiFacebookFill/></div>
                    <div><TfiLinkedin/></div>
                    <div><FiInstagram/></div>
                </Flex>
                <div className='mt-3 md:mt-0 flex justify-center'>
                    <p className='font-sm font-regular text-xs md:text-base text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default FooterDown