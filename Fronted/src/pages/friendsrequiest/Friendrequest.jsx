import { useContext } from "react"
import Frineds_ListAcc from "../friends/FriendsElements/FriendsCompo/Frineds_ListAcc"
import { usercontext } from "../../contextapi/index.context"

function Friendrequest() {
  const {requestedAccount} = useContext(usercontext)
  console.log(requestedAccount)
  return (
        <div className="md:bg-[#F0F2F5] md:w-screen md:pl-4 md:h-[87vh] md:overflow-auto">
            <div className="h-10 flex items-center text-2xl">
                <p className="font-bold">Friends Requiests</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {requestedAccount.map((user)=><Frineds_ListAcc key={user.userid} user={user} from={"con_req"} />)}
            </div>
        </div>
  )
}

export default Friendrequest
