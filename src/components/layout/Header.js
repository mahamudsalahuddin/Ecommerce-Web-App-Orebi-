
import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Dropdown from './Dropdown'
import Flex from './Flex'
import {FaBars, FaUserAlt, FaShoppingCart} from 'react-icons/fa'
import {HiSearch} from 'react-icons/hi'
import {ImCross} from 'react-icons/im'
import {RxTriangleDown} from 'react-icons/rx'
import List from './List'
import ListItem from './ListItem'
import Search from './Search'
import Image from './Image'
import { Link } from 'react-router-dom'

const Header = () => {
    let [categoryDropdownShow, setCategoryDropdownShow] = useState(false);
    let [userDropdownShow, setUserDropdownShow] = useState(false);
    let [cartDropdownShow, setCartDropdownShow] = useState(false);
    let categoryRef = useRef();
    let userRef = useRef();
    let cartRef = useRef();
    useEffect(()=>{
        document.body.addEventListener("click", (e)=>{
            if(categoryRef.current.contains(e.target)){
                setCategoryDropdownShow(true)
            }else{
                setCategoryDropdownShow(false)
            }

            if(userRef.current.contains(e.target)){
                setUserDropdownShow(true)
            }else{
                setUserDropdownShow(false)
            }
            if(cartRef.current.contains(e.target)){
                setCartDropdownShow(true)
            }else{
                setCartDropdownShow(false)
            }
        })
    },[])
  return (
    <div className='bg-[#F5F5F3] py-5 '>
        <Container> 
            <Flex className="flex justify-between">
                <div className='flex items-center'>
                    <Dropdown className="relative z-50" dropref={categoryRef}>
                        <p className='flex items-center gap-x-2.5 font-dm text-sm font-regular'><FaBars/>
                        <span className='hidden lg:inline-block'>Shop by Category</span>
                        </p>
                        {categoryDropdownShow && (
                        <List className="absolute top-9 w-[263px] bg-primary text-[#767676] font-dm font-regular text-sm">
                            <ListItem className="px-5 py-4 hover:text-white hover:px-7 ease-in duration-100  border border-solid border-[#2D2D2D] hover:font-bold" itemName="Accesories"/>
                            <ListItem className="px-5 py-4 hover:text-white hover:px-7 ease-in duration-100  border border-solid border-[#2D2D2D] hover:font-bold" itemName="Furniture"/>
                            <ListItem className="px-5 py-4 hover:text-white hover:px-7 ease-in duration-100  border border-solid border-[#2D2D2D] hover:font-bold" itemName="Electronics"/>
                            <ListItem className="px-5 py-4 hover:text-white hover:px-7 ease-in duration-100  border border-solid border-[#2D2D2D] hover:font-bold" itemName="Clothes"/>
                            <ListItem className="px-5 py-4 hover:text-white hover:px-7 ease-in duration-100  border border-solid border-[#2D2D2D] hover:font-bold" itemName="Bags"/>
                            <ListItem className="px-5 py-4 hover:text-white hover:px-7 ease-in duration-100  border border-solid border-[#2D2D2D] hover:font-bold" itemName="Home appliances"/>
                        </List>
                        )}
                    </Dropdown>
                </div>
                <div className='w-auto lg:w-[600px] relative'>
                    <Search className="w-full py-4 px-5 placeholder:text-[#c4c4c4] font-dm text-sm font-regular" placeholder="Search Products" />
                    <HiSearch className='absolute top-4 right-2.5 text-[23px]'/>
                </div>
                <div className='flex items-center'>
                   <Flex className="flex gap-x-10">
                    <Dropdown className="relative z-50" dropref={userRef}>
                        <div className='flex items-center'>
                            <FaUserAlt/>
                            <RxTriangleDown/>
                        </div>
                        {userDropdownShow && (
                        <List className="absolute top-9 w-[200px] right-0 bg-white text-primary font-dm font-regular text-sm text-center border border-solid border-[#F0F0F0]">
                            <ListItem className="px-5 py-4 hover:bg-primary hover:text-white border-b border-solid border-[#F0F0F0] hover:font-bold" itemName="My Account"/>
                            <ListItem className="px-5 py-4 hover:bg-primary hover:text-white border-b border-solid border-[#F0F0F0] hover:font-bold" itemName="Logout"/>
                        </List>
                        )}
                    </Dropdown>
                            
                    <div>
                        <Dropdown className="relative z-50" dropref={cartRef}>
                            <FaShoppingCart className='text-[18px]'/>

                            {cartDropdownShow && (
                                <div className='w-[360px] absolute top-8 right-0  border border-solid border-[#F0F0F0]'>
                                    <div className='bg-[#F5F5F3] p-5'>
                                <Flex className="flex justify-between">
                                    <div>
                                        <Image imgsrc="assets/cartImage.png"/>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <h3 className='font-dm font-bold text-sm text-primary'>Black Smart Watch</h3>
                                        <p className='mt-3 font-dm font-bold text-sm text-primary'>$44.00</p>
                                    </div>
                                    <div className='flex justify-end items-center'><ImCross/></div>
                                </Flex>
                            </div>
                            <div className='bg-white  p-5'>
                                <h4 className='font-dm font-regular text-base text-[#767676]'>Subtotal: <span className='font-dm font-bold text-base text-[#262626]'>$44.00</span></h4>
                                <Link to="#" className='font-dm font-bold text-sm py-4 px-10 border border-solid border-[#2D2D2D] inline-block mt-3'>View Cart</Link>
                                <Link to="#" className='font-dm font-bold text-sm py-4 px-10 border border-solid border-[#2D2D2D] inline-block mt-3 bg-primary text-white ml-5'>Checkout</Link>
                            </div>
                                </div>
                            )}
                        </Dropdown>
                    </div>
                   </Flex>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Header