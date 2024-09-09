import { useEffect, useState } from "react"
import Homemainbox from "./homemainitems/Homemainbox"
import { getAllPost } from "../../../api/api"

function HomeMain() {
  const [post,setPost] = useState([])
  const [users,setUsers] = useState([])
  async function getPosts(){
    const res = await getAllPost();
    const post = res.post;
    const users = res.users;
    setUsers(users)
    setPost((prev)=>[...prev,...post])
  }
  useEffect(()=>{
    getPosts()
  },[])
  return (
    <div className="flex flex-col mt-4 gap-3">
      {
        post.reverse().map((items,index)=><Homemainbox items={items} key={index} users={users}  />)
      }
    </div>
  )
}

export default HomeMain
