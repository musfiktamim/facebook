import React from 'react'

function Messageaccounttop() {
  return (
    <div className='h-20 border-b-[1px] shadow-lg shadow-gray-300 rounded-b-md mx-2'>
      <div className='pl-6 pt-4'>
        <h1 className='font-bold'>Message</h1>
      </div>
      <div className='px-12 w-[100%] mt-1'>
        <input className='w-[100%] h-7 rounded-lg outline-none border-[1px] pl-3 text-sm cursor-auto ' placeholder='Search...' type="text" />
      </div>
    </div>
  )
}

export default Messageaccounttop
