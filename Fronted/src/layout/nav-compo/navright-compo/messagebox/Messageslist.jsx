import { useContext } from "react";
import { usercontext } from "../../../../contextapi/index.context";
import MessageslistItems from "./mesagesbox/MessageslistItems"

function Messageslist() {
  const {alreadyfriends,addconversationC} = useContext(usercontext);
  return (
    <div className="h-auto px-2 py-5 overflow-y-auto scroll-smooth">
      {
        alreadyfriends.map((items,index)=>{
          return <MessageslistItems items={items} key={index} />
        })
      }
    </div>
  )
}

export default Messageslist
