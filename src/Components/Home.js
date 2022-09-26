import React from 'react'
import NavBar from './NavBar'
import "../CSS/home.css"

function Home() {
  return (
    <>
    <div className='homeContainer'>
    <NavBar/>
        <div className='topContainer'>
          
        </div>

        <div className='lowerContainer'>
          <div className='leftSideLowerContainer'>
              <span>Welcome to Infenito</span>
              <h2>We power</h2><br/>
              <h2>brands to build</h2><br/>
              <h2>big!</h2><br/>
              {/* <h3>We power</h3>
              <h3>Brnads to build</h3>
              <h3>big!</h3> */}
              <button>JOIN</button>
          </div>

          <div className='rightSideLowerContainer'>
              <img src="https://s3-alpha-sig.figma.com/img/c219/f241/34571ab7ef6c1f17c68187e41fb189e2?Expires=1664755200&Signature=Sx6REZmTmGIB0BUSpxAaxZh9qPuvTX9U5L6bmkbA6dXOxAIV3RYH~C-3b3JoKVCPyeE7CFLKtjXIBrtpDsXwgLlRckHKdBRST4rQnHWca5KYI8SdlKof6ssSFBSxaV-rOhYfIBLpTb1bY8HveYQGn9HkTUrtOjvKdQDrjHigvSPXzPGadNn7qQPwckyvJhV3ps1cX6mdkAJvLGE3NRxt06QmGUZof2LIhli-Hx8kMr8bysbuvvkdxVzW8E81iu8~Q6tfqqUWlcjBlUf4~zLmF~HQR8kwLe4qRVFZApoZd1why-iOrpxzssvxIn4LKhMhxphJfxNVZmqFYY31YwnUOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
          </div>
        </div>
    </div></>
  )
}

export default Home

// <div className='navbarSide'>
{/* <NavBar/>
<div className='leftSide'>
  
      
  </div>
</div>

<div className='forflexing'>
  

  <div className='rightSide'>
      
  </div>
  </div> */}