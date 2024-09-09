import { NavLink } from "react-router-dom"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Navcenter() {
  return (
        <div className="flex list-none items-center h-[100%] md:w-1/3 gap-2 md:justify-center ">
            <li className="nav-list after:contents-'' bg-white after:absolute after:w-[105%] after:b after:h-[102%] after:blur-sm bg-transparent after:hidden hover:after:inline after:opacity-[0.5] after:-z-[1] after:rounded-lg after:bg-gradient-to-r from-purple-500 to-pink-500 after:bg-gray-600">
                <NavLink to={"/"} className="nav-NavLink">
                    <HomeOutlinedIcon />
                </NavLink>
            </li>
            <li className="nav-list after:contents-'' bg-white after:absolute after:w-[105%] after:b after:h-[102%] after:blur-sm bg-transparent after:hidden hover:after:inline after:opacity-[0.5] after:-z-[1] after:rounded-lg after:bg-gradient-to-r from-purple-500 to-pink-500 after:bg-gray-600">
                <NavLink to={"/friends"} className="nav-NavLink">
                    <PeopleOutlineOutlinedIcon />
                </NavLink>
            </li>
            <li className="nav-list after:contents-'' bg-white after:absolute after:w-[105%] after:b after:h-[102%] after:blur-sm bg-transparent after:hidden hover:after:inline after:opacity-[0.5] after:-z-[1] after:rounded-lg after:bg-gradient-to-r from-purple-500 to-pink-500 after:bg-gray-600">
                <NavLink to={"/account"} className="nav-NavLink">
                    <AccountCircleOutlinedIcon />
                </NavLink>
            </li>
            <li className="nav-list after:contents-'' bg-white after:absolute after:w-[105%] after:b after:h-[102%] after:blur-sm bg-transparent after:hidden hover:after:inline after:opacity-[0.5] after:-z-[1] after:rounded-lg after:bg-gradient-to-r from-purple-500 to-pink-500 after:bg-gray-600">
                <NavLink to={"/videos"} className="nav-NavLink">
                    <OndemandVideoOutlinedIcon />
                </NavLink>
            </li>
        </div>
  )
}

export default Navcenter
