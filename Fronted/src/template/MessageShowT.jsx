import React, { useContext, useEffect, useState } from 'react'
import { usercontext } from '../contextapi/index.context'

function MessageShowT({items}) {
    const {Muser,useTimeFormator} = useContext(usercontext)
    const date = items.date 
    const [showTime,setShowTime] = useState(false)
  return (
    <div className={`w-[100%] flex text-wrap h-auto ${Muser._id==items.senderId?"justify-end":"justify-start"} cursor-context-menu`} onClick={()=>setShowTime(!showTime)}>
        <div className={`max-w-[80%] w-fit h-fit  border-[1px] rounded-md px-2 py-1 ${items.senderId==Muser._id?"bg-blue-300":"bg-white"} overflow-x-hidden shadow-sm text-wrap`}>
          <p className='break-words'>
            {items.message}
          </p>
          {
            showTime?
            <p className='text-xs font-light'>
              {useTimeFormator(date)}
            </p>
            :null
          }
        </div>
    </div>
  )
}

export default MessageShowT
