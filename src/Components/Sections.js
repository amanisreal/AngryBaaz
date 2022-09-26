import React from 'react'
import circularLogo from "../Resources/Ellipse254.png"
import querySent from "../Resources/Vector(3).png"
import designing from "../Resources/Vector(4).png"
import development from "../Resources/architecture_black_24dp2.png"
import production from "../Resources/category_black_24dp2.png"
import tick from "../Resources/Vector(6).png"
import blueBackground from "../Resources/Vector(5).png"
import servicesGIF from "../Resources/45155-support-system.gif"
import "../CSS/sections.css"

function Sections() {
  return (
    <>
    <div className='sectionsHeading'>
        <div className='sectionsHeadingPinkLine'></div>
        <h2>Let's See</h2>
        <h2>how it works</h2>
    </div>
    <div className='sectionContainer'>
        <div id="boxOne" className='boxOne'>
            <div className='queryOne'>
            
                <div className='outercircleBoxOne'>
                <img className='querySentLogo' src={querySent}/>
                </div>
                <h3 className='querySentH3'>QUERY SENT </h3>
                <div className="boxOneTwo">
                 
                <p id="querySentPara" className='querySentPara'>Give your prerequisties and an tell us what all you need</p>        
           
                 </div>
                   
                 </div> 

                 
        </div>

        <div className='boxTwo'>
            <div className='designing'>
                <div className='outercircleBoxTwo'>
                    <img className='designingLogo querySentLogo' src={designing}/>
                </div>
                
                <h3 className='querySentH3 designingH3'>DESIGNING</h3>
                <p className='designingPara querySentPara'>Get latest High Fiedility Designs with adaptive nature</p>  
                
            
            </div>
        </div>

        <div className='boxThree'>
            <div className='development'>
                <div className='outercircleBoxThree'>
                    <img className='developmentLogo querySentLogo' src={development}/>
                </div>
                <h3 className='querySentH3 developmentH3'>DEVELOPMENT</h3>
                <p className="querySentPara developmentPara">Get your website deployed and start growing</p> 
            </div>
        </div>

        <div className='boxFour'>
            <div className='production'>
                <div className='outercircleBoxFour'>
                    <img className='productionLogo querySentLogo' src={production}/>
                </div>
                <h3 className='querySentH3 productionH3'>PRODUCTION</h3> 
                <p className='querySentPara productionPara'>See detailed analytics of your product with experts support</p>
            </div>
        </div>

        
    </div>

    <div className='lowerBottom'>
        <div className='lowerBottomleftSide'>
            <p>What you get besides the above things</p>
        </div>

        <div className='middleSide'>
        <div className='middleSideLogo'>
            <img className='blueBackground' src={blueBackground}/>
            <img className='tick' src={tick}/></div>
            <p>24/7 Support</p>
        </div>

        <div className='rightSide'>
            <img src={servicesGIF}/>
        </div>
    </div>
    </>
  )
}

export default Sections