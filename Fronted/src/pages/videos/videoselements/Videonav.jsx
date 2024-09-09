import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import {ChildFriendlySharp, FireExtinguisher, FireHydrantAlt, HomeOutlined, Menu, NetworkCell, People, PeopleOutline, TrendingDown, TrendingUp, TrendingUpOutlined, Wifi1Bar, WifiFind, WifiFindOutlined} from "@mui/icons-material"

function Videonav() {
    const [showNav,setShowNav] = useState(true);
  return (
    <>
    <div className={'absolute z-50 flex md:hidden '} onClick={()=>setShowNav(!showNav)}>
        <Menu />
    </div>
    <div className={`md:h-[87%] px-2 rounded-md py-3 w-[250px] shadow-md bg-white z-40 md:left-0 flex flex-col gap-y-2  border-[1px] list-none absolute ${showNav?"left-[-250px]":"left-0"} md:mt-0 mt-10 transition-all`}>
      <li className='video_nav_list'>
        <NavLink className="video_nav_navlink">
            <HomeOutlined />
            <p>Home</p>
        </NavLink>
      </li>
      <li className='video_nav_list'>
        <NavLink className="video_nav_navlink">
            <TrendingUpOutlined />
            <p>Treind</p>
        </NavLink>
      </li>
      <li className='video_nav_list'>
        <NavLink className="video_nav_navlink">
            <PeopleOutline />
            <p>Frieds</p>
        </NavLink>
      </li>
      <li className='video_nav_list'>
        <NavLink className="video_nav_navlink">
            <WifiFindOutlined />
            <p>Follower</p>
        </NavLink>
      </li>
    </div>
    </>
  )
}

export default Videonav
