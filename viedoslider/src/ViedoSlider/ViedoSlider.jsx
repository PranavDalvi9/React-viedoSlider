import React, { useEffect, useState } from 'react'
import "./ViedoSlider.css"
import "./ViedoSlider.css"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
 
export default function ViedoSlider() {
    const sliderData = [
        {
            image: "https://media.istockphoto.com/videos/thirty-seconds-to-zero-futuristic-digital-countdown-timer-with-no-video-id1326018562",
            index:0
        },
        {
            image : "https://media.istockphoto.com/videos/abstract-futuristic-technology-background-with-digital-number-timer-video-id1323414619",
            index:1
        },
        {
            image : "https://media.istockphoto.com/videos/glowing-golden-bitcoin-on-black-background-3d-rendering-video-id1263521126",
            index:2
        },
        {
            image : "https://media.istockphoto.com/videos/credit-score-concept-video-id1315958651",
            index:3
        }
    ]

    const [curent, setCurrent] =useState(0)
    const length = sliderData.length;

    const autoScroll = true;
    let slideInterval ;
    let intervalTime = 5000;

    function auto (){
        slideInterval = setInterval(nextSlide, intervalTime)
    }
useEffect(() => {
 setCurrent(0)
},[])
    useEffect(() => {
if(autoScroll){
    auto()
}

return() => clearInterval(slideInterval)
    },[curent])

    const nextSlide = () => {
        setCurrent(curent === length-1 ? 0 : curent + 1 )
    }

    const prevSlide = () => {
        setCurrent(curent === 0 ? length-1 : curent - 1 )
    }


  return (
    <div className='Slider'>
      <FaArrowAltCircleLeft className='LeftArrow' onClick={() => prevSlide()}/>
      <FaArrowAltCircleRight className='RightArrow' onClick={() => nextSlide()}/>

    {
        sliderData.map((e) => (
            <div className={e.index === curent ? 'slide-active' : 'slide' } key={e.index}>

                    {
                        e.index === curent && (
                        // <img src= {e.image} alt="" className='Imagess' />
                        // <iframe src={e.image} frameborder="0" className='Imagess' ></iframe>
                        <video autoPlay loop width={900}>
                            <source src={e.image} />
                        </video>
                        )
                    }
            </div>
            
            // <img src= {e.image} alt="" className='Imagess' />
        ))
    }


    </div>
  )
}
