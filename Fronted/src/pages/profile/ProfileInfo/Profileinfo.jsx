import React, { useState } from 'react'

function Profileinfo() {
    const [btnClicked,setBtnClicked] = useState('post')
    

  return (
    <div className='h-10 bg-white  w-[96%] flex pl-2 items-center md:gap-x-2 m-auto mt-2 rounded-md'>
        <li className='list-none flex items-end h-10'>
            <button className={`h-8 text-sm rounded-md w-16  ${btnClicked=='post'?'text-blue-500 border-b-2 border-blue-500':null}`} onClick={()=>setBtnClicked('post')}>Post</button>
        </li>
        <li className='list-none flex items-end h-10'>
            <button className={`h-8 text-sm rounded-md w-16 ${btnClicked=='about'?'text-blue-500 border-b-2 border-blue-500':null}`} onClick={()=>setBtnClicked('about')}>About</button>
        </li>
        <li className='list-none flex items-end h-10'>
            <button className={`h-8 text-sm rounded-md w-16 ${btnClicked=='photos'?'text-blue-500 border-b-2 border-blue-500':null}`} onClick={()=>setBtnClicked('photos')}>Photos</button>
        </li>
        <li className='list-none flex items-end h-10'>
            <button className={`h-8 text-sm rounded-md w-16 ${btnClicked=='videos'?'text-blue-500 border-b-2 border-blue-500':null}`} onClick={()=>setBtnClicked('videos')}>Videos</button>
        </li>
        <li className='list-none flex items-end h-10'>
            <button className={`h-8 text-sm rounded-md w-16 ${btnClicked=='comunity'?'text-blue-500 border-b-2 border-blue-500':null}`} onClick={()=>setBtnClicked('comunity')}>Comunity</button>
        </li>
    </div>
  )
}

export default Profileinfo
