import React from 'react'
import "../CSS/navbar.css"
import infenitoLogo from "../Resources/infenitoLogo.png"

function NavBar() {
  return ( 
    <div className='navbarContainer'>
        <div className='leftSide'>
            <div className='logo'>
                <img src={infenitoLogo}/>
            </div>

            <div className='logoName'>
                infenito
            </div>

            <div className='outercircle'/>
            <div className='innercircle'/>
        </div>

        <div className='rightLeftSide'>
            <ul className='rightLeftSideUL'>
                <li className='ULLIElements'>HOME</li>
                <li className='ULLIElements'>PORTFOLIO</li>
                <li className='ULLIElements'>ABOUT US</li>
                <li className='ULLIElements'>PRICING</li>
            </ul>

        </div>

        <div className='rightRightSide'>

        </div>
    </div>
  )
}

export default NavBar