import { NavLink } from "react-router-dom"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TransferWithinAStationOutlinedIcon from '@mui/icons-material/TransferWithinAStationOutlined';
import ReduceCapacityOutlinedIcon from '@mui/icons-material/ReduceCapacityOutlined';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
function FriendsLeft() {
  return (
    <div className="hidden h-[80vh] md:shadow-2xl md:w-[275px] md:list-none md:px-2 md:pt-4 md:flex flex-col gap-1">
        <li className=" md:h-12 shadow-lg md:hover:bg-[#F0F2F5] md:rounded-md">
            <button className="h-[100%] w-[100%] flex items-center gap-1">
                <HomeOutlinedIcon />
                <p>Home</p>
            </button>
        </li>
        <li className=" md:h-12 shadow-lg md:hover:bg-[#F0F2F5] md:rounded-md ">
            <NavLink className="h-[100%] w-[100%] flex items-center gap-1" to={"/friends/request"}>
                <TransferWithinAStationOutlinedIcon />
                <p>Friend Requiest</p>
            </NavLink>
        </li>
        <li className=" md:h-12 shadow-lg md:hover:bg-[#F0F2F5] md:rounded-md">
            <NavLink className="h-[100%] w-[100%] flex items-center gap-1" to={"/friends/friend"}>
                <ReduceCapacityOutlinedIcon />
                <p>All Friends</p>
            </NavLink>
        </li>
        <li className=" md:h-12 shadow-lg md:hover:bg-[#F0F2F5] md:rounded-md">
            <NavLink className="h-[100%] w-[100%] flex items-center gap-1" to={"/friends/sendedrequest"}>
                <SendToMobileOutlinedIcon />
                <p>Sended Request</p>
            </NavLink>
        </li>
    </div>
  )
}

export default FriendsLeft
