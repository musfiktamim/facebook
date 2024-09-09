import {NavLink} from "react-router-dom"
import { useContext } from "react"
import { usercontext } from "../../../../contextapi/index.context"
function Frineds_ListAcc({user,from}) {

  const {confirm_req , send_req,cancel,delete_req,unfriend} = useContext(usercontext)
  

  return (
    <div className="Frineds_ListAcc_container_md">
      <div className="Frineds_ListAcc_imgcontainer_md overflow-hidden">
        <img src={"http://localhost:8000/userimage/"+user.profileimage} className=" md:h-[100%] md:w-[100%] md:rounded-t-md" alt="" />
      </div>
      <div className=" md:flex md:flex-col px-2 justify-evenly flex flex-col">
        <div className="md:h-[55px] md:w-[220px] md:pl-2  text-black font-bold flex items-center">
          <NavLink to={`/account/user/${user.userid}`} className="" title={user.username}>{user.username.length>=20?user.username.slice(0,20)+"...":user.username}</NavLink>
        </div>
        <div className={`md:w-[220px]  md:flex md:flex-col md:gap-2 flex gap-2 h-auto`}>
          {
            from=="req_con"||from=="send_req"?<button className="md:w-[200px] w-[100px] h-[35px] text-white bg-[#2C74D9] rounded-md" 
            onClick={()=>{
              from=="req_con"?confirm_req(user._id):send_req(user._id)
            }}
            >
              {from=="req_con"?"Confirm":"Add Friends"}
            </button>:null
          }
          {
            from=="req_con"||from=="req_unfriend"||from=="sended"?<button className="md:w-[200px] w-[100px] h-[35px] bg-[#E4E6EB] rounded-md" onClick={()=>{
              from=="req_con"?delete_req(user._id):from=="req_unfriend"?unfriend(user._id):cancel(user._id)
             }} >{from=="req_con"?"Delete":from=="req_unfriend"?"Unfriend":"cencel"}</button>:null
          }
        </div>
      </div>
    </div>
  )
}

export default Frineds_ListAcc
