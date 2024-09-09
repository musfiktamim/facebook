import React, { useContext, useEffect, useRef, useState } from 'react'
import MessageShowT from '../../../template/MessageShowT'
import { usercontext } from '../../../contextapi/index.context'

function Messagemobomid({messages}) {
  return (
    <div className='h-[80%] px-2 py-2 overflow-y-auto flex flex-col gap-2 border-b-2' id='scrolls' >
        {
            messages.map((items,index)=><MessageShowT items={items} key={index}/>)
        }
    </div>
  )
}

export default Messagemobomid
