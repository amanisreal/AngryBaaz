import React from 'react'
import "../CSS/doubt.css"
import SliderSide from './SliderSide'

function Doubt() {
  return (
    <>
    <div className='doubtContainer'>
        <div className='topDoubtContainer'>
        <div className='pinkLineDoubt'/>
        <h3>Still have a doubt?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <SliderSide className="forSlider"/>
    </div>

    <div className='lowerSliderContainer'>
        <div className='lowerSliderContainerLeftSide'>
            What our Client's say about us ?
        </div>

        <div className='middleOne'>
            <p>Look no further. These guys are great to work woth! VERY GOOD COMPANY & GREAT TEAM SPIRIT!, strongly recommend them.</p>
            <h3>DAVID</h3>
            <h4>Jr. Manager at SUBROS, India</h4>
        </div>

        <div className='rightSide'>
            <img className='rightSideLogo' src="https://s3-alpha-sig.figma.com/img/c4cd/21cb/62001927f039806453e930f3a640c759?Expires=1665360000&Signature=aZtRV~-jA2YAJKdUPzCL4xAfnMRYu5uTJwqHVaeD1wYspdsGns~2yaTqG3NYZdd5vhCF3gM54xP4JA97FBqP1u2FpiHtFTXyFdRPwrmG71c2y3w0TT1W35saDXIwWt7rQolBA1zJGW9wUwWH~2V~eJjqkONCL4uTpQfxi6LR9viNBBkSgwI04XUq-z-keKOzZ6tmfiwPdgE-3CFa-HFKFmMVHmG2AkeIpqEH6bWa7ipDJdF5fk-Lq84fMG0MlAc6F7Bc8BbbB08jYr2Ap9FDqSV~67ENewnl-4VOa6BZDpo7rITxqGAu-Zj-WGeNBcmcQKvOs50qkukAhqb0Kh12AQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
        </div>
    </div>
    </>
  )
}

export default Doubt