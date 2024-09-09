import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { createUser } from "../../../api/api";
import { toast } from "sonner";

function SignupForm() {

    const navigate = useNavigate();
    const [cover,setCover] = useState();
    const [profile,setProfile] = useState();
    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    const [Password,setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();
    const coverHandleChnage = (e) =>{
        if(e.target.files[0].type=="image/png"||e.target.files[0].type=="image/jpeg"||e.target.files[0].type=="image/jpg"){
            setCover(e.target.files[0])
        }else{
            toast.error("this file not supprted",{
              duration:900
            })
        }
    }

    const profileHandleChnage = (e) => {
      if(e.target.files[0].type=="image/png"||e.target.files[0].type=="image/jpeg"||e.target.files[0].type=="image/jpg"){
        setProfile(e.target.files[0])
      }else{
        toast.error("this file not supprted",{
          duration:900
      })
    }
  }

  async function handleSub (e){
    e.preventDefault();
    if(username&&email&&Password&&confirmPassword){
      if(Password==confirmPassword){
        const formdata = new FormData();
        formdata.append("cover",cover);
        formdata.append("profile",profile);
        formdata.append("username",username);
        formdata.append("email",email);
        formdata.append("password",Password);
        formdata.append("confirmpassword",confirmPassword);
        const res =await createUser(formdata)
        console.log(res)
        if(res.success){
          toast.success(res.message)
          localStorage.setItem("usertoken",res.token)
          navigate("/")
        }else{
          toast.error(res.message,{duration:900})
        }
      }else{
        toast.error("p or cp not match");
      }
    }else{
      toast.error("fill required fields",{duration:900});
    }
  }
    
  return (
    <form onSubmit={handleSub} className="w-[350px] h-auto py-3 px-2 shadow-2xl  m-auto rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <label htmlFor="cover" title="cover">
            <div className="h-[120px] bg-gray-400 shadow-lg">
                <img src={cover?URL.createObjectURL(cover):null} className="h-[100%] w-[100%]" />
            </div>
      </label>
      <input type="file" className="hidden" name="cover" id="cover" onChange={coverHandleChnage} />
      <label htmlFor="profile" title="profile">
            <div className="h-20 w-20 rounded-full absolute top-[70px] shadow-lg bg-gray-300">
                <img src={profile?URL.createObjectURL(profile):null} className="h-[100%] w-[100%] rounded-full" alt="" />
            </div>
      </label>
      <input type="file" className="hidden" name="profile" id="profile" onChange={profileHandleChnage}  />
      <label htmlFor="">
        <div className="mt-5 flex flex-col">
          <p className="text-gray-400">Username</p>
          <input type="text" required className="pl-2 outline-none border-[1px] border-gray-400 rounded-md" onChange={e=>setUsername(e.target.value)} />
        </div>
      </label>
      <label htmlFor="">
        <div className="flex flex-col">
          <p className="text-gray-400">Email</p>
          <input type="email" required className="pl-2 outline-none border-[1px] border-gray-400 rounded-md" onChange={e=>setEmail(e.target.value)} />
        </div>
      </label>
      <label htmlFor="">
        <div className="flex flex-col">
          <p className="text-gray-400">Password</p>
          <input type="password" className="pl-2 outline-none border-[1px] border-gray-400 rounded-md" onChange={e=>setPassword(e.target.value)} />
        </div>
      </label>
      <label htmlFor="">
        <div className="flex flex-col">
          <p className="text-gray-400">Confirm Password</p>
          <input type="password" className="pl-2 outline-none border-[1px] border-gray-400 rounded-md" onChange={e=>setConfirmPassword(e.target.value)} />
        </div>
      </label>
      <div className="mt-3 flex w-[100%]">
        <button className="py-1 px-2 bg-blue-500 w-[100%] rounded-md shadow-xl" type="submit">Submit</button>
      </div>
      <hr className="bg-green-700 mt-2"/>
      <NavLink to={"/login"} className="text-gray-400 flex justify-center underline">Already have account</NavLink>
    </form>
  )
}

export default SignupForm
