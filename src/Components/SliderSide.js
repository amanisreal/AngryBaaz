import React from 'react'
import one from "../Resources/One.png"
import two from "../Resources/Two.png"
import three from "../Resources/Three.png"
import four from "../Resources/Four.png"
import five from "../Resources/Five.png"
import "../CSS/sliderside.css"

function SliderSide() {
  return (
    <>
    <div className='sliderSideContainer'>
        <div className='slider'>
            <div className='commondiv insight'>
                <img className='sliderImages' src={one}/>
                <p className='imagesDescription'>About infenito, insights about us</p>
                <div className='pinkLineAfterpara'></div>
            </div>

            <div className='stacks commondiv'>
                <img className='sliderImages' src={four}/>
                <p className='imagesDescription'>See out latest blogs about stacks</p>
                <div className='pinkLineAfterpara'></div>
            </div>

            <div className='health commondiv'>
                <img className='sliderImages' src={three}/>
                <p className='imagesDescription descriptionOne'>See our latest projects on healthcare</p>
                <div className='pinkLineAfterpara pinkLineONE'></div>
            </div>

            <div className='design commondiv'>
                <img className='sliderImages' src={two}/>
                <p  className='imagesDescription descriptionTwo'>Unlock new metaverse in the design system</p>
                <div className='pinkLineAfterpara pinkLineTWO'></div>
            </div>

            <div className='websites commondiv'>
                <img className='sliderImages' src={five}/>
                <p className='imagesDescription'>Get insights of the websites</p>
                <div className='pinkLineAfterpara'></div>
            </div>
        </div>
    </div>

    
    </>
  )
}

export default SliderSide