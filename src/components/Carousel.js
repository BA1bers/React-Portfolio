import React, {useState} from 'react'
import '../App.css'
//import BtnSlider from './BtnSlider
import CarouselImg from './CarouselImg'

export default function Carousel() {
    return (
        <div className= "container-slider">
            {CarouselImg.map((obj, index) => {
                return (
                    <div>
                        <img src="" alt="" />
                    </div>
                )
            })}
        </div>
    )
}
