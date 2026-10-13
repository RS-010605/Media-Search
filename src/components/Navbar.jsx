import { Link, Navigate } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 py-3'>
      <Link to='/' className='block cursor-pointer'>
        <h1 className='font-bold text-xl text-gray-600 cursor-pointer p-1'>MEDIA COLLECTIONS</h1>
      </Link>
      <div className='flex gap-3 '>
      <Link className='flex justify-center m-1 text-gray-600 px-2 py-1 active:scale-95 font-medium ' to='/' >Home</Link>
      <Link className='flex justify-center m-1 text-gray-600 px-2 py-1 active:scale-95 font-medium ' to='/collection' >Collections</Link>
      </div>
    </div>
  )
}

export default Navbar