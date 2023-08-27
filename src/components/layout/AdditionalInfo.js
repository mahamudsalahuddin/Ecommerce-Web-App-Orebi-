import Container from './Container'
import React from 'react'
import Flex from './Flex'
import {TbNumber2} from "react-icons/tb"
import {MdLocalShipping} from "react-icons/md"
import {IoMdRefresh} from "react-icons/io"

const AdditionalInfo = ({children}) => {
  return (
    <div className='border border-solid border-[#F0F0F0] mt-[-5px]  py-2 sm:py-6'>
        <Container> 
        <Flex className="flex justify-around">
            <Flex className="flex items-center">
                <TbNumber2 className='text-[10px] sm:text-xl'/>
                <p className='font-sm font-regular text-[10px] sm:text-base text-[#6D6D6D] ml-[10px]'>Two years warranty</p>
            </Flex>
            <Flex className="flex items-center">
                <MdLocalShipping className='text-[10px] sm:text-xl'/>
                <p className='font-sm font-regular text-[10px] sm:text-base text-[#6D6D6D] ml-[10px]'>Free shipping</p>
            </Flex>
            <Flex className="flex items-center">
                <IoMdRefresh className='text-[10px] sm:text-xl'/>
                <p className='font-sm font-regular text-[10px] sm:text-base text-[#6D6D6D] ml-[10px]'>Return policy in 30 days</p>
            </Flex>
        </Flex>
    </Container>
    </div>
  )
}

export default AdditionalInfo