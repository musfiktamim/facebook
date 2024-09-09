import React from 'react'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

function Messagemobotop({state}) {
  return (
    <div className='h-16 flex items-center justify-between pr-5 border-[1px]'>
      <div className='h-14  flex items-center px-2'>
        <div className='h-12 w-12  overflow-hidden rounded-full'>
            <img src={`http://localhost:8000/userimage/${state.profileimage}`} className='h-[100%] w-[100%] ' alt="" />
        </div>
        <div className='ml-2'>
            <h1 className="font-semibold">{state.username}</h1>
            <p className='text-sm font-thin'>Online</p>
        </div>
      </div>
      <div className='text-black'>
        <button>
            <MoreVertOutlinedIcon />
        </button>
      </div>
    </div>
  )
}

export default Messagemobotop
