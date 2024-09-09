import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

function Messagetop() {
  return (
    <div className="h-24 rounded-b-lg shadow-md ">
        <div className='flex px-3 py-3 justify-between'>
            <p>Masseges</p>
            <button>
                <MoreVertOutlinedIcon />
            </button>
        </div>
        <div className='px-3 w-[100%] flex items-start'>
            <input type="search" placeholder='Search..' className='outline-none border-[1px] border-black w-[100%] bg-[#F0F0F0] rounded-2xl ps-3 text-sm' />
        </div>
    </div>
  )
}

export default Messagetop
