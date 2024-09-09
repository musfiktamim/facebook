import React, { useContext, useEffect, useRef, useState } from 'react'
import { usercontext } from '../../../contextapi/index.context';
import { useLocation, useNavigate } from 'react-router-dom';
import Messagemobotop from './Messagemobotop';
import Messagemobomid from './Messagemobomid';
import MessagemoboFooter from './MessagemoboFooter';

function Messagemobo() {
  const {messageDialogInfermation,conversation,addMessagesC,getMessagesC,setMessageDialogInfermation,addconversationC} = useContext(usercontext)

  
  const {state} = useLocation()
  
  const [messages,setMessages] = useState([])
  
  
  
  
    
    const conversationID = conversation.conversation;
    
    useEffect(()=>{
      setMessageDialogInfermation(state)
      addconversationC(state._id)
    },[state])
    
    useEffect(()=>{
      setMessages([])
    },[])
  
  
    const [reload,setReload] = useState(true)
  
    useEffect(()=>{
      async function getMessagesF(){
        try{
          const cnvid =conversationID._id;
          const res =await getMessagesC(cnvid);
          setMessages(res)
    
        }catch{
          
        }
      }
      getMessagesF()
  
    },[conversationID,reload])
    
    const [messagetext,setMessagetext] = useState("")
    
    
  
    async function handleSub(e){
      e.preventDefault();
      const msg = {
        cnvid:conversationID._id,
        rcvid:messageDialogInfermation._id,
        "messages":messagetext?messagetext:"👍"
      }
      if(messagetext){
        await addMessagesC(msg)
        setMessagetext("")
        setReload(!reload)
      }else{
        await addMessagesC(msg)
        setMessagetext("")
        setReload(!reload)
      }
    }
  return (
      <div className="pt-1 h-[89vh] md:hidden">
        <Messagemobotop state={state} />
        <Messagemobomid messages={messages}  />
        <MessagemoboFooter handleSub={handleSub} messagetexts={{setMessagetext,messagetext}} />
      </div>
  )
}

export default Messagemobo
