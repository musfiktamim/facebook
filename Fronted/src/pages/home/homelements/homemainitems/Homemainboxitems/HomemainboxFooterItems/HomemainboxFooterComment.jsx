import React, { useEffect, useState } from 'react'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SendRounded from "@mui/icons-material/SendRounded";
import { toast } from 'sonner';
import { commentAdd } from '../../../../../../api/api';
import HomemainboxFooterCommentDiv from './HomemainboxFooterCommentDiv';

function HomemainboxFooterComment({setShowComment,postId,comment,users}) {
  const [comments,setComments] = useState(comment)
  const [commentText,setCommentText] = useState("")
  async function handleSub(e){
    e.preventDefault();
    if(commentText){
      const res = await commentAdd({"message":commentText,"postId":postId})
      setCommentText("");
      const comment = res.newComment.comment
      setComments(comment)
      if(res.success){
        setComments(res.newComment.comment.reverse());
        toast(res.message)
      }
    }else{
      toast.error("plz fill the text box")
    }
  }

  
  return (
    <div className='absolute drop-shadow-lg border-t-[1px] overflow-hidden border-collapse w-[350px] h-[300px] z-[1000] bg-white translate-y-[-100%] rounded-md shadow-lg '>
      <div className='h-8  flex items-center border-b-[2px]'>
        <button className='h-[90%] w-[28.8px] rounded-full overflow-hidden bg-none relative hover:text-blue-400 before:contents-"" before:w-[100%] before:h-[100%] before:absolute before:translate-x-[-40px] hover:before:translate-x-0 before:transition-transform hover:before:bg-blue-950 before:z-[-1]  ' onClick={()=>setShowComment(false)}>
            <KeyboardBackspaceRoundedIcon />
        </button>
        <p className='font-serif font-semibold'>Back</p>
      </div> {/*end*/}
      <div className='h-[227px] border-[1px] flex gap-2 flex-col pb-2 bg-[#E4E7EB] overflow-y-auto pl-2 pt-2'>
        {
          comments.map((items,index)=><HomemainboxFooterCommentDiv users={users} key={index} items={items}/>)
        }
        
      </div>
      <form className='h-[40px] flex px-3 gap-2 bg-white justify-center items-center' onSubmit={handleSub}>
        <input type="text" placeholder='comment..' value={commentText} className='w-[80%] h-[70%] outline-none border-[1px] rounded-md pl-2 focus:border-gray-600' onChange={e=>setCommentText(e.target.value)} />
        <button type='submit' className={`${commentText?"text-black":"text-gray-500"}`} disabled={commentText?false:true}>
          <SendOutlinedIcon />
        </button>
      </form>
      
    </div>
  )
}

export default HomemainboxFooterComment
