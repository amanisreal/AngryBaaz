import React from 'react'
import gif1 from "../Resources/113015-contact-us.gif"
import "../CSS/dropMsg.css"
import insta from "../Resources/Vector(7).png"
import twitter from "../Resources/Vector(8).png"
import linkedin from "../Resources/Vector(9).png"


function DropMsg() {
  return ( 
    <div className='dropMsgContainer'>
        <div className='dropMsgContainerleftSide'>
        <div className='pinkLine'></div>
            <h3>Let's Buid Something AWESOME !</h3>
            {/* <h3>AWESOME !</h3> */}

            <p>One of the Tech Experts will reach out to you within next 48 business hours.</p>
            

            <img className='gif1' src={gif1}/>

            <div className='socialMediaSection'><h3>Follow us on</h3>
            <ul className='socialHandlerUL'>
                <li className='socialHandlerULLI'><img src={insta}/></li>
                <li className='socialHandlerULLI twitter'><img src={twitter}/></li>
                <li className='socialHandlerULLI'><img src={linkedin}/></li>
            </ul></div>
        </div>

        <div className='dropMsgContainerrightside'>
            <h3>Drop us a message</h3>
            <span id="loveSpan">We would love to hear everything from you</span>

            <form>
              <label className='nameLabel' for="fName">Name</label>
              <br/>
              <input className='nameInputContainer' type="text" id="fName"/>
              <br/>

              <label className='emailLabel' for="email">Email</label>
              <br/>
              <input className='nameInputContainer emailInputContainer' type="email" id="email"/>
              <br/>

              <label className='contactLabel' for="contactNumber">Contact Number</label>
              <br/>
              <input className='nameInputContainer contactInputContainer' type='number' id="contactNumber"/>
              <br/>

              <label for="Subject">Subject</label>
              <br/>
              <input className='nameInputContainer' type='text' id="Subject"/>
              <br/>

              <label for="description">Description</label>
              <br/>
              <textarea className='descriptionContainer' id="description"/>
              <br/>
              <button className='sendButton'>SEND</button>
            </form>
        </div>
    </div>
  )
}

export default DropMsg