import { useState } from "react"
import {toast} from "sonner"
import { NavLink, useNavigate } from "react-router-dom"
import { logedin } from "../../../api/api";

function LoginFrom() {
  const navigate = useNavigate();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  async function handleSub(e){
    e.preventDefault()
    if(email&&password){
      const res =await logedin({email,password});
      if(res.success){
        toast.success(res.message,{duration:900})
        localStorage.setItem("usertoken",res.token)
        navigate("/")
      }else{
        toast.error(res.message,{duration:900})
      }
    }else{
      toast.error("required fields need to fill",{duration:900})
    }
  }
  

  return (
    <form className="w-[350px] h-auto py-3 px-2 rounded-md shadow-2xl  m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <label htmlFor="">
        <div className="flex flex-col">
          <p className="text-gray-400">Email</p>
          <input type="text" className="outline-none border-[1px] border-gray-400 rounded-md" onChange={e=>setEmail(e.target.value)} />
        </div>
      </label>
      <label htmlFor="">
        <div className="flex flex-col">
          <p className="text-gray-400">Password</p>
          <input type="text" className="outline-none border-[1px] border-gray-400 rounded-md" onChange={e=>setPassword(e.target.value)} />
        </div>
      </label>
      <div className="mt-3 flex w-[100%]">
        <button className="py-1 px-2 bg-blue-500 w-[100%] rounded-md shadow-xl" onClick={handleSub}>Submit</button>
      </div>
      <hr className="bg-green-700 mt-2"/>
      <NavLink to={"/signup"} className="text-gray-400 flex justify-center underline">Create a account</NavLink>
    </form>
  )
}

export default LoginFrom
