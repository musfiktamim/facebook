import React, { useContext } from 'react'
import MessageAccountElements from './MessageAccountElements'
import { usercontext } from '../../../contextapi/index.context';

function Messageaccountbottom() {
    const {alreadyfriends,addconversationC} = useContext(usercontext);
  return (
    <div className='mt-2 px-2 pb-3 flex flex-col gap-2 h-[100%]'>

        {
            alreadyfriends.map((items,index)=><MessageAccountElements items={items} key={index} />)
        }
        
        
    </div>
  )
}

export default Messageaccountbottom
