import React, { useContext, useEffect, useState } from 'react'
import {NavLink} from "react-router-dom"
import { usercontext } from '../../../../../../contextapi/index.context';

function HomemainboxFooterCommentDiv({items,users}) {
    const {useTimeFormator} = useContext(usercontext)
    const [user,setUser] = useState({});
    useEffect(()=>{
        const filterd = users.filter(({_id:id1})=>id1==items.id)
        setUser(filterd[0])
    },[])
  return (
    <>    
      <div  className='max-w-[70%] h-auto  pt-1 bg-white transition-transform  rounded-md pr-1 w-fit pl-1 shadow-lg text-wrap'>
            <NavLink to={`/account/user/${user.userid}`} className='h-5 flex items-center gap-2 border-b-[1px] hover:text-blue-900'>
              <div className='w-5 h-[100%] rounded-full overflow-hidden'>
                <img src={"http://localhost:8000/userimage/"+user.profileimage} alt="" className='h-[100%] w-[100%]' />
              </div>
              <p className='text-sm'>{user.username}</p>
            </NavLink>
            <p className='break-words pr-1'>{items.commentText}</p>
            <p className='text-xs font-extralight'>{useTimeFormator(items.date)}</p>
      </div>
    </>
  )
}

export default HomemainboxFooterCommentDiv
