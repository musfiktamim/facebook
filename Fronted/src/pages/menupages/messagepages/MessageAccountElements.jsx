import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { usercontext } from '../../../contextapi/index.context'

function MessageAccountElements({items}) {
  return (
    <NavLink to={"/messages/message-mobo"} state={items} className='h-16 rounded-md border-t-[1px] flex items-center px-2 border-gray-200 shadow-md cursor-pointer shadow-gray-500' >
        <div className='h-14 w-14 border-[1px] rounded-full overflow-hidden '>
            <img src={`http://localhost:8000/userimage/${items.profileimage}`} className='h-[100%] w-[100%] rounded-full' alt="" />
        </div>
        <div className='h-[100%] ml-2 flex flex-col justify-evenly overflow-hidden'>
            <h1 className='font-serif font-extralight'>{items.username}</h1>
            <p className='font-thin text-sm'>text</p>
        </div>
    </NavLink>
  )
}

export default MessageAccountElements
