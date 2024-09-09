import Messageslist from "./messagebox/Messageslist"
import Messagetop from "./messagebox/Messagetop"

function Navrightmessagecompo() {
  return (
    <div className="w-[330px] border-[1px] bg-white shadow-lg absolute right-5 top-14 max-h-[85vh] flex flex-col rounded-md gap-2">
        <Messagetop />
        <Messageslist />
    </div>
  )
}

export default Navrightmessagecompo
