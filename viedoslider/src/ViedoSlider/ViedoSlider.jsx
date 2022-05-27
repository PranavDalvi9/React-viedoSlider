import React, { useEffect, useState } from 'react'
import "./ViedoSlider.css"
import "./ViedoSlider.css"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

export default function ViedoSlider() {
    const sliderData = [
        {
            image: "https://media.istockphoto.com/videos/young-woman-typing-on-laptop-keyboard-video-id162485781",
            index: 0
        },
        {
            image: "https://media.istockphoto.com/videos/aerial-view-of-harvard-university-in-cambridge-video-id1180893746",
            index: 1
        },
        {
            image: "https://media.istockphoto.com/videos/hard-work-teamwork-success-video-id1165567212",
            index: 2
        }
    ]

    const [curent, setCurrent] = useState(0)
    const length = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 7000;

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        if (autoScroll) {
            auto()
        }

        return () => clearInterval(slideInterval)
        // clearInterval reset the timer of slideInterval  
    }, [curent])

    const nextSlide = () => {
        // takes to next slide
        setCurrent(curent === length - 1 ? 0 : curent + 1)
    }

    const prevSlide = () => {
        // takes to previous slide
        setCurrent(curent === 0 ? length - 1 : curent - 1)
    }


    return (
        <div className='Slider'>
            <FaArrowAltCircleLeft className='LeftArrow' onClick={() => prevSlide()} />
            <FaArrowAltCircleRight className='RightArrow' onClick={() => nextSlide()} />

            {
                sliderData.map((e) => (
                    <div className={e.index === curent ? 'slide-active' : 'slide'} key={e.index}>

                        {
                            e.index === curent && (
                                <video autoPlay loop className='Imagess'>
                                    <source src={e.image} />
                                </video>
                            )
                        }
                    </div>
                ))
            }

        </div>
    )
}
