import React, { useContext, useEffect, useState } from 'react'

import { usercontext } from '../../contextapi/index.context';
import ProfileNav from './profileNav/ProfileNav';
import ProfileAbout from './profileabout/ProfileAbout';
import Profileinfo from './ProfileInfo/Profileinfo';
import { getPostForUser } from '../../api/api';
import Homemainbox from '../home/homelements/homemainitems/Homemainbox';
import Profilemain from './profilemain/Profilemain';

function Profile() {
  const [post,setPost] = useState([])
  const {Muser,alreadyfriends} = useContext(usercontext);
  const [user,setUser] = useState({});
  useEffect(()=>{
    (async function(){
      const res = await getPostForUser()
      setUser(res.user)
      setPost(res.post)

    })()
  },[Muser])
  return (
      <div className='h-auto bg-[#E4E7EB]'>
        <ProfileNav Muser={Muser}/>
        <ProfileAbout Muser={Muser} alreadyfriends={alreadyfriends}/>
        <Profileinfo Muser={Muser}/>
        <Profilemain post={post} user={user} />
      </div>
  )
}

export default Profile
