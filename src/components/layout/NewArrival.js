import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import Product from './Product'

const NewArrival = () => {
  return (
    <div className='mt-5 md:mt-32'>
        <Container>
            <Heading title="New Arrivals"/>
            <Flex className="sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between md:gap-x-10">
                <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                    <Product src="assets/productImg (1).png" badge={true}/>
                </div>
                <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                    <Product src="assets/productImg (2).png" badge={true}/>
                </div>
                <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                    <Product src="assets/productImg (3).png" badge={true}/>
                </div>
                <div className='sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]'>
                    <Product src="assets/productImg (4).png" badge={true}/>
                </div>
            </Flex>
        </Container>
    </div>
  )
}
export default NewArrival


















// =================================================================================================================================
//                                                         For slick slider
// =================================================================================================================================

// import React from 'react'
// import Container from './Container'
// import Heading from './Heading'
// // import Flex from './Flex'
// import Product from './Product'
// import "slick-carousel/slick/slick.css";
// import Slider from "react-slick";


// // function SampleNextArrow(props) {
// //     const { className, style, onClick } = props;
// //     return (
// //       <div
// //         className={className}
// //         style={{ ...style, display: "block", background: "red" }}
// //         onClick={onClick}
// //       />
// //     );
// //   }
  
// //   function SamplePrevArrow(props) {
// //     const { className, style, onClick } = props;
// //     return (
// //       <div
// //         className={className}
// //         style={{ ...style, display: "block", background: "green"}}
// //         onClick={onClick}
// //       />
// //     );
// //   }

// const NewArrival = () => {

//     const settings = {
//         dots: false,
//         infinite: true,
//         slidesToShow: 4,
//         arrows: true,
//         slidesToScroll: 1,
//         // nextArrow: <SampleNextArrow />,
//         // prevArrow: <SamplePrevArrow />,
//       };


//   return (
//     <div className='mt-32'>
//         <Container>
//             <Heading title="New Arrivals"/>

//         <Slider {...settings}>
        
//                 <div className='max-w-[370px]'>
//                     <Product src="assets/productImg (1).png" badge={true}/>
//                 </div>
          
        
//                 <div className='max-w-[370px]'>
//                     <Product src="assets/productImg (2).png" badge={true}/>
//                 </div>
          
        
//                 <div className='max-w-[370px]'>
//                     <Product src="assets/productImg (3).png" badge={true}/>
//                 </div>
          
        
//                 <div className='max-w-[370px]'>
//                     <Product src="assets/productImg (4).png" badge={true}/>
//                 </div>
          
        
//                 <div className='max-w-[370px]'>
//                     <Product src="assets/productImg (4).png" badge={true}/>
//                 </div>
          
//         </Slider>          
//         </Container>
//     </div>
//   )
// }

// export default NewArrival