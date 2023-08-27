import React from 'react'
import Badge from './Badge'
import Image from './Image'
import {FaHeart, FaShoppingCart} from 'react-icons/fa'
import {HiRefresh} from 'react-icons/hi'
import Flex from './Flex'
const Product = ({src, badge}) => {
  return (
    <div>
        <div className='relative overflow-y-hidden group'>
            <Image imgsrc={src}/>
            {badge && <Badge title="New"/>}
            <div className='bg-[#FFFFFF] absolute bottom-[-47%]  lg:max-xl:bottom-[-75%] group-hover:bottom-0 left-0 w-full py-6 px-8 ease-in duration-300'>
                <Flex className="flex justify-end items-center">
                    <p className='font-sm font-regular text-[10px] sm:text-base text-[#6D6D6D] mr-4 hover:font-bold hover:text-primary lg:max-xl:text-sm'>Add to Wish List</p>
                    <FaHeart className='' />
                </Flex>
                <Flex className="flex justify-end items-center my-5">
                    <p className='font-sm font-regular text-[10px] sm:text-base text-[#6D6D6D] mr-4 hover:font-bold hover:text-primary lg:max-xl:text-sm'>Compare</p>
                    <HiRefresh className='text-xl' />
                </Flex>
                <Flex className="flex justify-end items-center">
                    <p className='font-sm font-regular text-[10px] sm:text-base text-[#6D6D6D] mr-4 hover:font-bold hover:text-primary lg:max-xl:text-sm'>Add to Cart</p>
                    <FaShoppingCart className='' />
                </Flex>
            </div>
        </div>
        <div className='mb-12 md:mb-0'>
            <Flex className="flex justify-between mt-0 md:mt-6 items-center">
                <h3 className='font-dm font-bold lg:max-xl:text-sm text-xl'>Basic Crew Neck Tee</h3>
                <p className='lg:max-xl:text-sm font-dm font-regular text-base text-[#767676]'>$44.00</p>
            </Flex>
            <p className='lg:max-xl:text-sm font-dm font-regular text-base text-[#767676] mt-1 md:mt-4'>Black</p>
        </div>
    </div>
  )
}

export default Product