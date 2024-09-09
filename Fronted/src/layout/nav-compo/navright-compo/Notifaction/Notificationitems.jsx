import { NavLink } from "react-router-dom"

function Notificationitems() {
  return (
    <NavLink className="h-12 shadow-md hover:bg-slate-500 hover:text-white rounded-md flex gap-3 items-center pl-2">
        <div className="h-10 border-[1px] border-red-200 w-10 rounded-full">
    
        </div>
        <div className="h-[100%] flex flex-col justify-around ">
            <p className="text-sm">name</p>
            <p className="text-xs text-gray-400">Notification...</p>
        </div>
    </NavLink>
  )
}

export default Notificationitems
