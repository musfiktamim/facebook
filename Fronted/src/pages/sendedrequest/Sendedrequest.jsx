import React, { useContext } from 'react'
import { usercontext } from '../../contextapi/index.context'
import Frineds_ListAcc from '../friends/FriendsElements/FriendsCompo/Frineds_ListAcc'

function Sendedrequest() {
    const {requestSendedAccount} = useContext(usercontext)
    return (
          <div className="md:bg-[#F0F2F5] md:w-screen md:pl-4 md:h-[87vh] md:overflow-auto ">
              <div className="h-10 flex items-center text-2xl">
                  <p>Sended Requiests</p>
              </div>
              <div className="flex flex-wrap gap-4">

                {
                    requestSendedAccount.map((user)=><Frineds_ListAcc key={user.userid} user={user} from={"sended"} />)
                }                       
                
              </div>
          </div>
  )
}

export default Sendedrequest
