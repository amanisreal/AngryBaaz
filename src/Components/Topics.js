import React from 'react'
import "../CSS/topcs.css"
import appstacks from "../Resources/Vector(10).png"
import webstacks1 from "../Resources/Vector(11).png"
import webstacks2 from "../Resources/Vector(12).png"
import webstacks3 from "../Resources/Vector(13).png"
import datastacks from "../Resources/Vector(14).png"
import blockChain from "../Resources/9297466_eth_blockchain_coins_cryptocurrency_crypto_icon 1 (1).png"
import Al from "../Resources/AI (1).png"

function Topics() {
  return (
    <div className='topicsContainer'>
        <div className='topContainerTopics'>
            <div className='pinkLineForMe'/>
            <h2>See popular tags<br/> and browse different topics</h2>
        </div>

        <div className='bottomContainerTopics'>
            <div className='leftSideTopicsLower'>
                <div className='bigPinkLine'/>
                <ul className='commonUL'>
                    <li className='differentTopics'><h3>Different Topics</h3> <div className='outerCircleForBigPink'><div className='differentTopicsCircle'/></div></li>
                    <li className='commonUlLI aimltext'>AI/ML<div className='outerforAi'><div className='pinkforAi'/></div></li>
                    <li className='commonUlLI nodetext'>Node <div className='outerfornode'><div className='pinkfornode'/></div></li>
                    <li className='commonUlLI databasetext'>Database <div className='outerfordata'><div className='pinkfordata'/></div></li>
                    <li className='commonUlLI mysqltext'>MySQL <div className='outerformysql'><div className='pinkformysql'/></div></li>
                    <li className='commonUlLI reacttext'>React <div className='outerforReact'><div className='pinkforReact'/></div></li>
                </ul>
            </div>

            <div className='rightSideTopicsLower'>
                <div className='leftSideOFRghtSide'>
                    <div className='leftONE'>
                        <img src={appstacks}/>
                        <p>Application Stacks</p>
                        <div className='pinkLineFORALL'/>
                        <p className='commonDescriptionPara'>We develop android & iOS apps which can increase customer engagement and generate mazimum ROI with maximum leaad conversions.</p>
                    </div>

                    <div className='leftTWO'>

                        <img src={datastacks}/>
                        <p>Database Stacks</p>
                        <div className='pinkLineFORALL linedatabase'/>
                        <p className='commonDescriptionPara'>Get extensively researched website and web app development services using the latest technologies like MEAN, MERN, Laravel, BootStrap, and much more.</p>
                    </div>

                    <div className='leftTHREE'>
                        <img src={blockChain}/>
                        <p>Blockchain</p>
                        <div className='pinkLineFORALL lineblock'/>
                        <p className='commonDescriptionPara'>We have a set of technologies and services that organizations use to store, manage, and access data.</p>
                    </div>
                </div>

                <div className='rightSideOFRightSide'>
                    <div className='rightONE'>
                        <div className=''>
                            <img className='leftweblogo' src={webstacks1}/>
                            <img src={webstacks2}/>
                            <img className='leftweblogo' src={webstacks3}/>

                        </div>
                        <p>Website Stacks</p>
                        <div className='pinkLineFORALL lineweb'/>
                        <p className='commonDescriptionPara'>Get extensively researched website and web app development services using the latest technologies like MEAN, MERN, Laravel, BootStrap, and much more.</p>
                    </div>

                    <div className='leftTWO'>
                        <img src={Al}/>
                        <p>AI/ML Stacks</p>
                        <div className='pinkLineFORALL lineaiml'/>
                        <p className='commonDescriptionPara'>We provide features to larger organizations which have already started maturing their processes to create standardized ML pipelines that are optimized for scale, efficiency, and control.</p>
                    </div>

                    <div className='leftTHREE'>
                        <img src=""/>
                        <p>Gaming Stacks</p>
                        <div className='pinkLineFORALL linegamingL'/>
                        <p className='commonDescriptionPara'>Gaming services serve customers in gambling establishments, such as casinos or racetracks. Some workers tend slot machines or deal cards.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topics