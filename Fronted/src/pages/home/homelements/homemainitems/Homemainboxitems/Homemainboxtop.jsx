import { isRouteErrorResponse, NavLink } from "react-router-dom";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import { useContext, useEffect, useState } from "react";
import { usercontext } from "../../../../../contextapi/index.context";

function Homemainboxtop({users,user,items}) {
  const {useTimeFormator} = useContext(usercontext)
  const [setUser,setSetUser] = useState({})
  useEffect(()=>{
    try{
      if(users.length!=0){
        const userDetailes = users.filter((item)=>item._id==items.userid)
        return setSetUser(userDetailes[0])
      }
    }catch{

    }
  },[items])
  return (
    <div className="h-[50px] flex items-center justify-between px-1">
      <div className="flex items-center gap-2">
        <div className="h-[45px] w-[45px] border-[1px] overflow-hidden border-black rounded-full">
          <img src={"http://localhost:8000/userimage/"+ `${user?user.profileimage:setUser.profileimage}`} className="h-[100%] w-[100%]" alt="" />
        </div>
        <div>
          <NavLink className="text-sm">{user?user.username:setUser.username}</NavLink>
          <p className="text-xs text-gray-300">{useTimeFormator(items.date)}</p>
        </div>
      </div>
      <div className="cursor-pointer">
        <MoreHorizSharpIcon />
      </div>
    </div>
  );
}

export default Homemainboxtop;
