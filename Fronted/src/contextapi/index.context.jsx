import {createContext, useEffect, useRef, useState} from "react";
import { addconversation, addMessage, cencel_req, delete_reqs, getMessage, people, post_reqs, postMessages, req_cons, send_reqs, unfriend_reqs } from "../api/api";
import {toast} from "sonner"
import {io} from "socket.io-client"
export const usercontext = createContext([])


export function Userprovider({children}){ 
  // for show unshow state
  const [postDialogOpen,setPostDialogOpen] = useState(true)
  
  
  //pagination hoock
  



  // for data
    const [user,setUser] = useState([]);
    const [Muser,setMuser] = useState({})
    const [userFriendR,setUserFriendR] = useState([]);
    const [userFriendS,setUserFriendS] = useState([]);
    const [userFriendH,setUserFriendH] = useState([]);

    const [isTrue,setIsTrue] = useState(true)

    const [requestedAccount,setAequestedAccount] = useState([]);
    const [requestSendedAccount,setAequestSendedAccount] = useState([]);
    const [alreadyfriends,setAlreadFriends] = useState([]);
    const [peoples,setPeoples] = useState([]);

    const [conversation,setConversation] = useState({})


    // message dialog ifermation
    const [messageDialogInfermation,setMessageDialogInfermation] = useState({})


  //for function
    const datas = async()=>{
    const res =  await people();
        setUserFriendR(res.userfreinds.reqFreinds);
        setUserFriendS(res.userfreinds.sendedRequest);
        setUserFriendH(res.userfreinds.haveFriends);
        setUser(res.users)
        setMuser(res.user)
    }
    useEffect(()=>{
        datas()
    },[isTrue])
    

    useEffect(()=>{
        const results = user.filter(({ _id: id1 }) => userFriendR.some(({ id: id2 }) => id1===id2));
        setAequestedAccount(results)
    },[userFriendR,isTrue])

    useEffect(()=>{
        const result = user.filter(({_id:id1})=> userFriendS.some(({id:id2})=>id1==id2))
        setAequestSendedAccount(result);
    },[userFriendS,isTrue])

    useEffect(()=>{
        const result = user.filter(({_id:id1})=>userFriendH.some(({id:id2})=> id1==id2 ))
        setAlreadFriends(result);
    },[userFriendH,isTrue])

    useEffect(()=>{
        const result1 = user.filter(({_id:id1})=> !userFriendR.some(({id:id2})=>id1==id2)) 
        const result2 = result1.filter(({_id:id1})=> !userFriendS.some(({id:id2})=>id1==id2));
        // console.log(result2)
        const result = result2.filter(({_id:id1})=> !userFriendH.some(({id:id2})=>id1==id2))
        setPeoples(result)
    },[user,userFriendR,userFriendH,userFriendS,isTrue])
    
    


    //show unshow
    const [messageDialog,setMessageDialog] = useState(false)
    const [showMessage,setShowMessage] = useState(false)

    // for api


    async function confirm_req(data){
        const res = await req_cons(data);
        if(res.success){
          toast.success(res.message,{duration:900});
        }else{
          toast.error(res.message)
        }
        setIsTrue(!isTrue)
      }
    
      async function send_req(data){
        const res =await send_reqs(data);
        if(res.success){
          toast.success("Send request",{duration:900,classNames:"my toast",description:res.message});
        }else{
          toast.error("Send request",{duration:900});
        }
        setIsTrue(!isTrue)
      }
      
      async function cancel(data){
        const res = await cencel_req(data)
        if(res.success){
          toast.success("Cencel request",{duration:900,classNames:"my toast",description:res.message});
        }else{
          toast.error("Cencel request",{duration:900});
        }
        setIsTrue(!isTrue)
      }
    
    
      async function delete_req(data){
        const res = await delete_reqs(data)
        if(res.success){
          toast.success("Accept request",{duration:900,classNames:"my toast",description:res.message});
        }else{
          toast.error("Accept request",{duration:900});
        }
        setIsTrue(!isTrue)
      }
    
      async function unfriend(data){
        const res = await unfriend_reqs(data)
        if(res.success){
          toast.success("Unfrined",{duration:900,classNames:"my toast",description:res.message});
        }else{
          toast.error("Unfrined",{duration:900,classNames:"my toast",description:res.message});
        }
        setIsTrue(!isTrue)
      }
      
      async function post_req(data){
        const res =await post_reqs(data)
        if(res.success){
          toast.success("post",{duration:900,classNames:"my toast",description:res.message});
        }else{
          toast.error("post",{duration:900,classNames:"my toast",description:res.message});
        }
      }
      
      // messages api
      async function postMessagesC(messages){
        const res = await postMessages(messages)
        if(res.success){
          console.log("hello")
        }else{
          toast.error(res.message,{duration:900,classNames:"my toast",description:res.message});
        }
      }

      async function addconversationC(recieverid){
        const res = await addconversation(recieverid);
        setConversation(res)
        return res
      }

      async function addMessagesC(data){
        const res = await addMessage(data)
        return res
      }
      
      async function getMessagesC(data){
        const res = await getMessage(data);
        return res;
      }

      // state combainer value
      
      const postdialogcombainer = {postDialogOpen,setPostDialogOpen};

      // for provider value



      //for message section


      // time formator//

      function useTimeFormator(data){
        const nowtimes = Date.call();
        const splitNowTimesArray = nowtimes.split(" ");
        
        const splitingArray = data.split(" ");
        const times = splitingArray[4].split(":")
        let hour = parseInt(times[0])
        let day = splitingArray[2];
        let month = splitingArray[1];
        let year = splitingArray[3]
        if(year!=splitNowTimesArray[3]){
          year = splitingArray[3];
        }else{
          year = ""
        }
        
        if(month!=splitNowTimesArray[1]){
          month;
        }else{
          month = ""
        }
        if((parseInt(splitNowTimesArray[2])-parseInt(day))==1){
          day = "yeasterday"
        }else if((parseInt(splitNowTimesArray[2])-parseInt(day))==0){
          day = "";
        }else{
          day;
        }
        if(hour>12){
          hour -=12;
        }

        
        
        return `${hour}:${times[1]} - ${day} ${day?"/":""} ${month} ${month?"/":""}${year}`
      }


      const socket = useRef();

      useEffect(() => {
        socket.current = io("ws://localhost:9000");
      }, [])



    const context_value = {
        requestedAccount,
        requestSendedAccount,
        alreadyfriends,
        peoples,
        isTrue,
        setIsTrue,
        user,
        Muser,

        messageDialogInfermation,
        setMessageDialogInfermation,
        setConversation,
        conversation,
        
        // customiz hook
        useTimeFormator,
        socket,
        //apis
        confirm_req,
        send_req,
        unfriend,
        cancel,
        delete_req,
        post_req,
        postMessagesC,
        addconversationC,
        addMessagesC,
        getMessagesC,

        socket,
        
        
        //show unshow
        postdialogcombainer,
        messageDialog,
        setMessageDialog,
        showMessage,
        setShowMessage
    } 


    return <usercontext.Provider value={context_value}>
        {children}
    </usercontext.Provider>

}