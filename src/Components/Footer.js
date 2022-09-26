import React from 'react'
import "../CSS/footer.css"

function Footer() {
  return (
    <div className='footerContainer'>
        <div className='leftSide'>
            <div className='first'>
            <h3 className='commonH3'>Company</h3>
                <ul className='commonUL'>
                <li className='commonLI'>About us</li>
                <li className='commonLI'>Portfolio</li>
                <li className='commonLI'>Pricing</li>
                <li className='commonLI'>Contact</li>
                </ul>
            </div>

            <div className='second'>
                <h3 className='commonH3'>Contact</h3>
                <ul className='commonUL'>
                    <li className='commonLI'>Quote</li>
                    <li className='commonLI'>infento@gmail.com</li>
                    <li className='commonLI'>9843753330</li>
                </ul>
            </div>

            <div className='third'>
                <h3 className='commonH3'>More</h3>
                <ul className='commonUL'>
                    <li className='commonLI'>Instagram</li>
                    <li className='commonLI'>Facebook</li>
                    <li className='commonLI'>Linkedin</li>
                </ul>
            </div>
        </div>

        <div className='rightSideFooter'>
        <div className='innerCircle'></div>
            <div className='outerCircle'></div>
        </div>
    </div>
  )
}

export default Footer