import React, { useContext, useEffect, useState } from 'react'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import Carousel from "react-multi-carousel"
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { usercontext } from '../../../../contextapi/index.context';
import { toast } from 'sonner';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };



function PlusPostConpo({chages}) {

    const {post_req} = useContext(usercontext)

    const {postDialogOpen,setPostDialogOpen} = chages
    const [file,setFile] = useState([])
    const [text,settext] = useState("")
    function handleSub(e){
        e.preventDefault();
        if(file.length==0&&text==""){
            return toast("please fill something")
        }else{
            if(file.length>12){
                return toast("you crosed file limit you can upload 12 file")
            }else{
                setPostDialogOpen(false)
                const formdata = new FormData();
                formdata.append("posttitle",text)
                Array.from(file).forEach(e=>{
                    formdata.append("content",e)
                })
                post_req(formdata);
            }
        }
        
    }
    const isVIF = (data,index)=>{
        if(data.type=="image/jpeg"){
            return <img src={URL.createObjectURL(data)} key={index} className='h-32 p-[4px] rounded-md ' loading='lazy' />
        }else if(data.type=="video/mp4"){
            return <video src={URL.createObjectURL(data)} key={index} className='h-32 p-[4px] rounded-md' autoPlay muted/>
        }else{
            null
        }
    }
  return (
    <form onSubmit={handleSub} className='absolute rounded-md flex flex-col shadow-2xl left-[50vw] top-[50vh] translate-x-[-50%] translate-y-[-50%] h-auto w-[350px] bg-white'>
        <div className='h-10 flex items-center font-semibold'>
            <button onClick={()=>setPostDialogOpen(!postDialogOpen)} className='w-[30px] h-[30px] rounded-full items-center justify-center flex hover:bg-slate-300 hover:shadow-lg hover:text-white'>
                <KeyboardBackspaceRoundedIcon />
            </button>
            <p>Post</p>
        </div>
        <div className='max-h-20 w-[100%] border-t-[1px] border-gray-500'>
            <textarea onChange={(e)=>settext(e.target.value)} type="text" placeholder='text....' className='h-[100%] w-[100%] font-serif outline-none focus:text-black text-gray-600 text resize-none' />
        </div>
        <div className='max-h-60 mb-3  mt-4'>
            <label htmlFor="content" className='flex items-center  justify-center mb-3'>
                <div className='w-28  flex flex-col justify-center border-[1px] items-center cursor-pointer'>                
                    <NoteAddIcon />
                    <p className='font-light'>Add Content</p>
                    <p>{file.length}</p>
                </div>
            </label>
            <input type="file" accept='image/jpeg,video/mp4,application/pdf' multiple className='hidden' id='content' onChange={(e)=>setFile((prev)=>[...prev,...e.target.files])} />
            <div className='max-h-32  gap-2'>
                <Carousel responsive={responsive} swipeable={true} draggable={true} showDots={false} autoPlay={true} pauseOnHover={true} dotListClass="custom-dot-list-style"  removeArrowOnDeviceType={["tablet", "mobile"]}  >
                    {
                        file?
                        Array.from(file).map((images,index)=>isVIF(images,index))
                        :null
                    }
                </Carousel>
            </div>
        </div>
        <div className='w-[100%] h-10  flex items-center justify-center mb-2'>
            <button className='h-[100%] w-[96%] bg-[#2C74D9] rounded-md text-white'>Share</button>
        </div>
    </form>
  )
}

export default PlusPostConpo