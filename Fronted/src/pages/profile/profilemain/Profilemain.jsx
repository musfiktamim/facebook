import React, { useEffect, useState } from 'react'
import Homemainbox from '../../home/homelements/homemainitems/Homemainbox'
import { people } from '../../../api/api'

function Profilemain({post,user}) {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        (async function(){
            const res = await people()
            setUsers((prev)=>[res.user,...res.users])
        })()
    },[])
  return (
    <div className='mt-1'>
        {
            post.map((items,index)=><Homemainbox items={items} users={users} user={user} key={index} />)
        }
    </div>
  )
}

export default Profilemain
