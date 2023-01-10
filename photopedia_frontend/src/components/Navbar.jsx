import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { IoMdAdd,IoMdSearch } from "react-icons/io";

const Navbar = ({searchTerm , setSearchTerm , user}) => {

  const navigate = useNavigate();
  
  if(!user) return null;
  

  return (
    <div className='flex gap-2 md:gap-5 w-full mt-5 pb-7'>
      <div className='flex justify-start items-center w-full px-2 rounded-md bg-white focous-within shadow-md border-none outline-none'>
      <IoMdSearch fontSize={21} className="ml-1"/>
      <input 
        type="text"
        onChange={(e) => setSearchTerm(e.target.value) }
        placeholder="Search"
        onFocus={()=>navigate('/search')}
        className="p-2 w-full bg-white outline-none"
      />
      </div>
      <div className='flex gap-3'>
        <Link to='create-pin' className="flex justify-center items-center bg-black text-white rounded-full w-12 h-12 sm:w-14">
          <IoMdAdd fontSize={21}/>
        </Link>
        <Link to= {`user-profile/${user?._id}`} className="hidden md:block">
          <img src={user.image} alt="profile-pic" className='w-12 h-12 sm:w-14 rounded-full ' />
        </Link>
      </div>
    </div>
  )
}

export default Navbar