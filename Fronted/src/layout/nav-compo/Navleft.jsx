import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAllPost, people } from '../../api/api';
import { usercontext } from '../../contextapi/index.context';

function Navleft() {
  const {Muser} = useContext(usercontext)
  const [showMenu,setShowMenu] = useState(false)
  const [users,setUsers] = useState([])
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    (async function(){
      const res = await people()
      setUsers((prev)=>([res.user,...res.users]))
    })()
  },[])
  useEffect(()=>{
    (async function(){
      const res = await getAllPost()
      setPosts(res.post)
    })() 
  },[])
  // console.log(posts)

  function handleChange(e){
    const findUser = users.filter((item) =>item.username.toLowerCase().includes(e.target.value.toLowerCase()))
    const userWisePost = posts.filter(({userid:id1})=>findUser.some(({_id:id2})=>id1==id2))
    const userFilter = findUser.filter((item)=>item._id!=Muser._id);
    const findPost = posts.filter((item) =>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    console.log(userFilter,userWisePost);
    console.log(findPost)
  }
  
  return (
    <div className="flex justify-between w-[100%] md:justify-start md:gap-2 md:w-1/3 ">
        <div>MRT</div>
        <div className='hidden md:flex'>
            <input type="search" className="outline-none border-2 rounded-lg pl-2" onChange={handleChange} />
        </div>
        <div className='flex md:hidden'>
              <button className=''>
                  <SearchOutlinedIcon />
              </button>
              <NavLink to={"/menu"}>
                  <MenuOutlinedIcon />
              </NavLink>
        </div>
    </div>
  )
}

export default Navleft
