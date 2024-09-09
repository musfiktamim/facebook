import { useContext, useEffect, useState } from "react"
import Frineds_ListAcc from "./FriendsCompo/Frineds_ListAcc"
import { people } from "../../../api/api"
import InfiniteScroll from 'react-infinite-scroll-component';
import { usercontext } from "../../../contextapi/index.context";
import { NavLink } from "react-router-dom";


function FriendsRight() {

    const {peoples,requestedAccount,alreadyfriends,requestSendedAccount,user} = useContext(usercontext)
    console.log()
  return (
    <div className=" md:bg-[#F0F2F5] md:w-screen md:pl-4 md:h-[87vh] md:overflow-auto">
        {
            requestedAccount.length!=0?
            <div className="h-10 flex justify-between pr-4 items-center text-2xl">
                <p>Friends Requiests</p>
                <NavLink className={'text-sm text-blue-500'} to={"/friends/request"}>See more</NavLink>
            </div>:null
        }

        <div className="flex flex-wrap gap-4">
            {
                requestedAccount.reverse().map((user)=><Frineds_ListAcc key={user.userid} user={user} from={"req_con"}/>)
            }
        </div>


        {   peoples.length!=0? 
            <div className="h-10 flex justify-between pr-4 items-center text-2xl">
                <p>People</p>
                <NavLink className={'text-sm text-blue-500'} to={"/account/peoples"}>See more</NavLink>
            </div>:null
        }

        <div className="flex flex-wrap gap-4">
        {
            peoples.reverse().map((user)=><Frineds_ListAcc key={user.userid} user={user} from={"send_req"} />)
        }
        </div>


       { 
       alreadyfriends.length!=0?
        <div className="h-10 pr-4 flex justify-between items-center text-2xl">
            <p>Friends</p>
            <NavLink className={'text-sm text-blue-500'} to={"/friends/friend"}>See more</NavLink>

        </div>:null
        }
        <div className="flex flex-wrap gap-4">
        {
            alreadyfriends.reverse().map((user)=><Frineds_ListAcc key={user.userid} user={user} from={"req_unfriend"} />)
        }
        </div>

        {
        requestSendedAccount.length!=0?    
        <div className="h-10 flex items-center pr-4 justify-between text-2xl">
            <p>Request sended</p>
            <NavLink className={'text-sm text-blue-500'} to={"/friends/sendedrequest"}>See more</NavLink>
        </div>:null
         }       
        <div className="flex flex-wrap gap-4">
        {
            requestSendedAccount.reverse().map((user)=><Frineds_ListAcc key={user.userid} user={user} from={"sended"} />)
        }
        </div>
        
        
    </div>
  )
}

export default FriendsRight
