import { useContext } from "react"
import { usercontext } from "../../../../../contextapi/index.context"

function MessageslistItems({items}) {
  const {setMessageDialog,setShowMessage,setMessageDialogInfermation,addconversationC} = useContext(usercontext)
  
  return (
    <div className="h-12 shadow-md hover:bg-slate-500 hover:text-white rounded-md flex gap-3 items-center pl-2 cursor-pointer" onClick={()=>{
      setMessageDialog(true)
      setShowMessage(false)
      setMessageDialogInfermation(items)
      addconversationC(items._id)
      }}>
        <div className="h-10 border-[1px] border-red-200 w-10 rounded-full">
          <img src={`http://localhost:8000/userimage/${items.profileimage}`} alt="" className="h-[100%] w-[100%] rounded-full" />
        </div>
        <div className="h-[100%] flex flex-col justify-around ">
            <p className="text-sm">{items.username}</p>
            <p className="text-xs text-gray-400">{}</p>
        </div>
    </div>
  )
}

export default MessageslistItems
