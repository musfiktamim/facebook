import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import UpcomingOutlinedIcon from '@mui/icons-material/UpcomingOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { useContext, useState } from 'react';
import Navrightcompoplus from './navright-compo/Navrightcompoplus';
import Navrightmessagecompo from './navright-compo/Navrightmessagecompo';
import NavNotifications from './navright-compo/NavNotifications';
import NavAccount from './navright-compo/NavAccount';
import PlusPostConpo from './navright-compo/nav_plus_conpo/PlusPostConpo';
import { usercontext } from '../../contextapi/index.context';
import MessageDialog from './navdialog/MessageDialog';
function Navright() {

    const {messageDialog,showMessage,setShowMessage,setMessageDialog} = useContext(usercontext)


    const [showMenu,setShowMenu] = useState(false)
    
    const [showNotification,setShowNotification] = useState(false)
    const [showAccount,setShowAccount] = useState(false)
    const [postDialogOpen,setPostDialogOpen] = useState(false)
  return (
    <div className='hidden h-[100%] md:w-1/3 md:flex md:flex-col md:justify-end'>
        <div className="  list-none md:flex items-center h-[100%] justify-end gap-2">
            <li className="nav-list after:contents-'' bg-white after:absolute after:w-[105%] after:b after:h-[102%] after:blur-sm bg-transparent after:hidden hover:after:inline after:opacity-[0.5] after:-z-[1] after:rounded-lg after:bg-gradient-to-r from-purple-500 to-pink-500 after:bg-gray-600">
                <button className="nav-NavLink" onClick={()=>{
                    setShowMenu(!showMenu)
                    showAccount?setShowAccount(false):null
                    showMessage?setShowMessage(false):null
                    showNotification?setShowNotification(false):null
                    }}>
                    <AddCircleOutlineOutlinedIcon />
                </button>
            </li>
            <li className="nav-list after:contents-'' bg-white after:absolute after:w-[105%] after:b after:h-[102%] after:blur-sm bg-transparent after:hidden hover:after:inline after:opacity-[0.5] after:-z-[1] after:rounded-lg after:bg-gradient-to-r from-purple-500 to-pink-500 after:bg-gray-600">
                <button className="nav-NavLink" onClick={()=>{
                    setShowMessage(!showMessage)
                    showMenu?setShowMenu(false):null
                    showAccount?setShowAccount(false):null
                    showNotification?setShowNotification(false):null
                    messageDialog?setMessageDialog(false):null
                }
                    }>
                    <UpcomingOutlinedIcon />
                </button>
            </li>
            <li className="nav-list after:contents-'' bg-white after:absolute after:w-[105%] after:b after:h-[102%] after:blur-sm bg-transparent after:hidden hover:after:inline after:opacity-[0.5] after:-z-[1] after:rounded-lg after:bg-gradient-to-r from-purple-500 to-pink-500 after:bg-gray-600"><button className='nav-NavLink' onClick={()=>{
                setShowNotification(!showNotification)
                showMenu?setShowMenu(false):null
                showMessage?setShowMessage(false):null
                showAccount?setShowAccount(false):null
                }}><NotificationsActiveOutlinedIcon /></button></li>
            <li className='h-9 w-9 border-red-100 border-[1px] rounded-full' onClick={()=>{
                setShowAccount(!showAccount)
                showMenu?setShowMenu(false):null
                showMessage?setShowMessage(false):null
                showNotification?setShowNotification(false):null
            }}>
                
            </li>
        </div>
        {
            showMenu?
            <Navrightcompoplus manuchange={{showMenu,setShowMenu}} chages={{postDialogOpen,setPostDialogOpen}}/>
            :null
        }
        {
            showMessage?
            <Navrightmessagecompo />
            :null
        }
        {
            showNotification?
            <NavNotifications />
            :null
        }
        {
            showAccount?
            <NavAccount />
            :null
        }
        {
            postDialogOpen?
            <PlusPostConpo chages={{postDialogOpen,setPostDialogOpen}}/>:null
        }
        {
            messageDialog?<MessageDialog  />:null
        }

        {
            
        }
    </div>
  )
}

export default Navright
