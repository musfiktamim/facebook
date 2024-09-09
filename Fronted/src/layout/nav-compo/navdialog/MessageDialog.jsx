import  { useContext, useEffect,    useState,  } from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { usercontext } from '../../../contextapi/index.context';
import MessageShowT from '../../../template/MessageShowT';



function MessageDialog() {

  const {messageDialogInfermation,conversation,addMessagesC,getMessagesC,socket} = useContext(usercontext)
  const conversationID = conversation.conversation;



  const [messages,setMessages] = useState([])
  const [reload,setReload] = useState(true)
  // const [realtimeMessage,setRealtimeMessage] = useState({})
  const [myReal,setMyReal] = useState({});

  
  useEffect(()=>{
    socket.current.on("getdata",data=>{
      console.log(data)
    })
  })

  useEffect(()=>{
    setMessages((prev)=>[...prev,myReal])
  },[myReal])
  // console.log(messages)
  

  useEffect(()=>{
    async function getMessagesF(){
      try{
        const cnvid =conversationID._id;
        const res =await getMessagesC(cnvid);
        setMessages(res)
  
      }catch{
        console.log("hello")
      }
    }
    getMessagesF()

  },[conversationID,reload])
  
  const [messagetext,setMessagetext] = useState("")

  function handleChange(e){
    setMessagetext(e.target.value)
  }

  async function handleSub(e){
    e.preventDefault();
    const msg = {
      cnvid:conversationID._id,
      rcvid:messageDialogInfermation._id,
      "messages":messagetext?messagetext:"👍",
      date:Date.call()
    }
    const msg1 = {
      cnvid:conversationID._id,
      rcvid:messageDialogInfermation._id,
      "message":messagetext?messagetext:"👍",
      date:Date.call()
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
    socket.current.emit("sendmessage",msg1)
  }



  

  return (
    <div className='hidden rounded-lg border-t-[1px] border-gray-300 absolute md:bottom-[2px] z-50 md:w-[270px] top-[40vh] md:flex md:h-[350px] bg-white shadow-lg shadow-slate-500 md:flex-col'>
        <div className='h-10  flex items-center justify-between pr-2'>
          <div className='flex items-center pl-[1px] gap-2'>
            <div className='h-8 w-8 border-[1px] rounded-full'>
            <img src={`http://localhost:8000/userimage/${messageDialogInfermation.profileimage}`} alt="" className="h-[100%] w-[100%] rounded-full" />

            </div>
            <div className='flex flex-col justify-evenly '>
              <p className='text-sm'>{messageDialogInfermation.username}</p>
              <p className='text-xs font-light'>Offline</p>
            </div>
          </div>
          <div>
            <MoreVertOutlinedIcon/>
          </div>
        </div>
        <div className='h-[270px] border-[1px] gap-1 flex flex-col overflow-y-auto pb-2 pt-3 px-2'>
          {
            messages.map((items,index)=><MessageShowT key={index} items={items}/>)
          }
        </div>
        <form className='flex items-center h-[40px] px-3' onSubmit={handleSub}>
          <input type="text" value={messagetext} className='outline-none border-[1px] w-[90%] pl-2 rounded-md text-gray-700' onChange={handleChange} />
          <button type='submit'>
            {
              messagetext.length!=0?
              <SendOutlinedIcon  className='text-gray-600'/>
              :"👍"
            }
          </button>
        </form>
    </div>
  )
}

export default MessageDialog
