import React, { useState } from 'react'
import "./ViedoSlider.css"
import "./ViedoSlider.css"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
 
export default function ViedoSlider() {
    const sliderData = [
        {
            image: "https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas=",
            index:0
        },
        {
            image : "https://s3.envato.com/files/252192817/HD.jpg",
            index:1
        },
        {
            image : "https://previews.123rf.com/images/mangpor2004/mangpor20041708/mangpor2004170800063/83607686-blurred-park-with-bokeh-light-nature-background-fall-autumn-season.jpg",
            index:2
        },
        {
            image : "https://s3.envato.com/files/252192817/HD.jpg",
            index:3
        }
    ]

    const [curent, setCurrent] =useState(0)
    const length = sliderData.length 

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
                        e.index === curent && (<img src= {e.image} alt="" className='Imagess' />)
                    }
            </div>
            
            // <img src= {e.image} alt="" className='Imagess' />
        ))
    }


    </div>
  )
}
