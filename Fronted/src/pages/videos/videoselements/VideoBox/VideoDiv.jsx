import React, { useEffect } from 'react';
import { NavLink} from "react-router-dom";
function VideoDiv({itemsdata}) {
    function slicertext(data){
        if(data.length>80){
            return data.slice(0,80)+"..."
        }else{
            return data
        }
    }
    // const s = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis ducimus";
    // console.log(s.length)
     const text ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sunt ad aperiam maiores exercitationem quibusdam sed nobis reprehenderit asperiores iste, deleniti voluptatem voluptate aspernatur cumque ea quos quia voluptates excepturi quae id porro enim quo? Accusamus corporis voluptatum eaque sint! Eius culpa, officia perferendis corrupti magni sapiente aliquam voluptatem officiis optio beatae, sequi accusamus quasi temporibus repellat, deleniti expedita exercitationem quam. Aperiam reprehenderit nam totam quas, qui dignissimos. Expedita accusantium quasi soluta. Aspernatur, qui aliquid itaque esse cum blanditiis totam quia laudantium nihil illo doloribus repellat excepturi delectus beatae adipisci dignissimos fugiat facilis! Molestiae laborum tenetu"
     const text2 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sunt ad aperiam maik"

     
  return (
    <div className='w-[300px] rounded-md h-[250px] border-[1px] shadow-md bg-white'>
        <div className='w-[100%] h-[170px] rounded-t-md border-[1px] overflow-hidden'>
            <NavLink to={`/video/${itemsdata.id}`} state={itemsdata} className={`h-[100%] w-[100%] flex items-center justify-center`}>
                <img src={itemsdata.img} className='h-[100%] w-[100%]' />
            </NavLink>
        </div>
        <div className='flex items-center h-[79px] w-[100%] pl-[3px] justify-between'>
            <div className='h-[40px] w-[40px] border-[1px] rounded-full'>

            </div>
            <div className='w-[255px] h-[100%] py-4 pl-2 flex flex-col justify-between'>
                <p className='text-sm font-light' title={text} >{slicertext(text)}</p>
                <p className='text-xs font-thin'>name...</p>
            </div>
        </div>
    </div>
  )
}

export default VideoDiv
