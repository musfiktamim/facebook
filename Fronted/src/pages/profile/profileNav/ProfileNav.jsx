function ProfileNav({Muser}) {
  return (
    <div className='md:h-52 h-44 w-[100%] mb-2 mt-2 md:px-4 relative'>
        <div className='h-[100%] md:w-[100%] md:rounded-md bg-white md:m-auto shadow-md'>
            <img src={"http://localhost:8000/userimage/"+Muser.coverimage} className='h-[100%] w-[100%] object-cover rounded-md' alt="" />
        </div>
        <div className='md:h-32 h-24 w-24 md:w-32 bg-white absolute top-[100px]  rounded-full'>
            <img src={"http://localhost:8000/userimage/"+Muser.profileimage} className='h-[100%] rounded-full border-white border-2 w-[100%]' alt="" />
        </div>
    </div>
  )
}

export default ProfileNav