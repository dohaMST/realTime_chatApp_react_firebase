import React from 'react'
import "./detail.scss"
const Detail = () => {
  return (
    <div className='detail'>

      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>doha MST</h2>
        <p>Lorem ipsum dolor sit amet elit</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>chat settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">

              <div className="photoDetail">
                <img src="./phs01.jpg" alt="" />
                <span>photo_2025.png</span>
              </div>
              <img src="./download.png" alt="" className='icon'/>
              
            </div>
            {/* <div className="photoItem">

              <div className="photoDetail">
                <img src="./phs01.jpg" alt="" />
                <span>photo_2025.png</span>
              </div>
              <img src="./download.png" alt="" className='icon'/>

            </div> */}
            {/* <div className="photoItem">

              <div className="photoDetail">
                <img src="./phs01.jpg" alt="" />
                <span>photo_2025.png</span>
              </div>
              <img src="./download.png" alt="" className='icon'/>

            </div> */}
            {/* <div className="photoItem">

              <div className="photoDetail">
                <img src="./phs01.jpg" alt="" />
                <span>photo_2025.png</span>
              </div>
              <img src="./download.png" alt="" className='icon'/>

            </div> */}
            {/* <div className="photoItem">

              <div className="photoDetail">
                <img src="./phs01.jpg" alt="" />
                <span>photo_2025.png</span>
              </div>
              <img src="./download.png" alt="" className='icon'/>

            </div> */}
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>shared files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block user</button>
      </div>
    </div>
  )
}

export default Detail
