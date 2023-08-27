// import React from 'react'
import React, { useEffect, useState } from "react";
import Image from "./Image";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import {FaBars} from 'react-icons/fa' //icon er ager 2 leter likhbo reacticons er por / diye
import Container from "./Container";

const Navbar = () => {

    let [show, setShow] = useState(true)
    useEffect(()=>{
      function scrollWidth(e){
        if(window.innerWidth < 1024){
           setShow(false)
        }else{
          setShow(true)
        }
      }
      scrollWidth();
      
      window.addEventListener("resize", scrollWidth)
    },[])

  return (
    <nav className="py-8">
    <Container>
      <Flex className="lg:flex">
        <div className="lg:w-1/4">
          <Image imgsrc="assets/logo.png"/>
        </div>
        
        <div className="lg:w-3/4 w-full">
        <FaBars onClick={()=> setShow(!show)} className="block lg:hidden ml-auto absolute top-11 right-2.5"/>
        {show && (
          <List className="lg:flex lg:justify-end lg:gap-x-10 mt-5 lg:mt-0">
            <ListItem className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0" itemName="Home"/>
            <ListItem className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0" itemName="About"/>
            <ListItem className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0" itemName="Services"/>
            <ListItem className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0" itemName="Contact"/>
          </List>
          )}
        </div>
      </Flex>
    </Container>
   </nav>
  )
}

export default Navbar