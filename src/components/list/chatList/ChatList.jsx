import React, { useState } from 'react'
import "./chatList.scss"

const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='search ...' />
        </div>
        <img onClick={()=>setAddMode(!addMode)} className="add" src={addMode? "./minus.png" : "./plus.png"} alt="" />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Doha MST</span>
          <p>hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Doha MST</span>
          <p>hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Doha MST</span>
          <p>hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Doha MST</span>
          <p>hello</p>
        </div>
      </div>
      
      
    </div>
  )
}

export default ChatList
