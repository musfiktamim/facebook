import { MessageRounded, NotificationsActiveOutlined, OpenWithOutlined, OutboundSharp, OutdoorGrill, OutdoorGrillOutlined, UpcomingOutlined, VerifiedUserOutlined } from '@mui/icons-material'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


function Menus() {
    const navigate = useNavigate()
  return (
      <div className='px-2 py-3 flex md:hidden  gap-x-10 gap-y-3 justify-between flex-wrap'>
        <NavLink to={"/messages/messages-home"} className='h-24 w-36 bg-gray-50 cursor-pointer border-[1px] rounded-lg shadow-lg flex flex-col items-center justify-center'>
            <UpcomingOutlined />
            <p className='font-bold'>Message</p>
        </NavLink>
        <NavLink to={"/notifications"} className='h-24 w-36 bg-gray-50 cursor-pointer border-[1px] rounded-lg shadow-lg flex flex-col items-center justify-center'>
            <NotificationsActiveOutlined />
            <p className='font-bold'>Notification</p>
        </NavLink>
        <NavLink to={"/account-settings"} className='h-24 w-36 bg-gray-50 cursor-pointer border-[1px] rounded-lg shadow-lg flex flex-col items-center justify-center'>
            <VerifiedUserOutlined />
            <p className='font-bold'>User</p>
        </NavLink>
        <div className='h-24 w-36 bg-gray-50 cursor-pointer border-[1px] rounded-lg shadow-lg flex flex-col items-center justify-center' onClick={()=>{
            localStorage.removeItem("usertoken");
            navigate("/login")
        }}>
            <OutboundSharp />
            <p className='font-bold'>Logout</p>
        </div>
      </div>
  )
}

export default Menus
