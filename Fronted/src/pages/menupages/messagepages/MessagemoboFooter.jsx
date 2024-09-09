import React from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function MessagemoboFooter({handleSub,messagetexts}) {
  const {messagetext,setMessagetext} = messagetexts
  return (
    <form className='h-[42px] flex justify-center mt-auto w-[100%]  items-center' onSubmit={handleSub}>
        <input type="text" value={messagetext} className='outline-none border-[1px] h-[70%] rounded-lg pl-2 w-[80%]' placeholder='Write Message...' onChange={e=>setMessagetext(e.target.value)} />
        <button type='submit'>
            {
              messagetext.length!=0?
              <SendOutlinedIcon  className='text-gray-600'/>
              :"👍"
            }
          </button>
    </form>
  )
}

export default MessagemoboFooter
