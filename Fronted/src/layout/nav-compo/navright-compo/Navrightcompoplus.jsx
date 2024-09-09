import CropOutlinedIcon from '@mui/icons-material/CropOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import 'react-multi-carousel/lib/styles.css';
import FlagIcon from '@mui/icons-material/Flag';
import { Dialog, DialogHeader } from '@material-tailwind/react';
import { useState } from 'react';
function Navrightcompoplus({chages,manuchange}) {
  const {showMenu,setShowMenu} = manuchange
  const {postDialogOpen,setPostDialogOpen} = chages;
  console.log(postDialogOpen)
  return (
    <div className='md:absolute md:flex bg-white md:right-48 md:top-14 md:w-36 md:border-2 md:list-none md:shadow-lg md:flex-col md:pb-6 md:gap-1 rounded-b-md'>
      <li className='nav-right-div-list' style={{borderBottom:"1px solid #E7E7E7"}} onClick={()=>{
        setPostDialogOpen(!postDialogOpen)
        setShowMenu(false)
        }}>
      <CropOutlinedIcon />
      <p>Post</p>
      </li>
      <li className='nav-right-div-list' style={{borderBottom:"1px solid #E7E7E7"}} onClick={()=>{
        setShowMenu(false)
      }}>
          <AutoStoriesOutlinedIcon />
          <p>Story</p>
      </li>
      <li className='nav-right-div-list' style={{borderBottom:"1px solid #E7E7E7"}} onClick={()=>{
        setShowMenu(false)
      }}>
          <SmartDisplayIcon />
          <p>Reels</p>
      </li>
      <li className='nav-right-div-list' style={{borderBottom:"1px solid #E7E7E7"}} onClick={()=>{
        setShowMenu(false)
      }}>
          <FlagIcon />
          <p>Page</p>
      </li>
  </div>
  )
}

export default Navrightcompoplus
