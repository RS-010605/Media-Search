import React from 'react'

import { removeCollection, removeToast } from '../redux/features/collectionSlice';
import { useDispatch } from 'react-redux';

const CollectionCard = ({item}) => {
   
   const dispach = useDispatch()

   const removeItemFromCollection = (item) => {
      dispach(removeCollection(item.id))
      dispach(removeToast())
   }
  return (
      <div className=' text-black w-80 h-60 rounded-2xl relative'>
      <div className='h-full rounded-2xl'>
         
         {item.type == 'photo' ? <img className='h-full w-full object-cover object-center rounded-2xl' src={item.src} alt="" loading='lazy' /> :''}
         {item.type == 'video' ? <video className='h-full w-full object-cover object-center rounded-2xl   ' autoPlay loop muted src={item.src} loading='lazy'></video> :''}
         {item.type == 'gif' ? <video className='h-full w-full object-cover object-center rounded-2xl   ' autoPlay loop muted src={item.src} loading='lazy' playsInline preload="none" ></video> :''}
         
      </div>
      <div id='textdata' className='px-2 py-3 bottom-0 overflow-y-hidden items-center gap-10 w-full flex text-white absolute justify-between'>
         
         <h1  className='capitalize h-9 font-mono w-[80%]'>{item.title}</h1>
         <button onClick={() => {
            removeItemFromCollection(item)
         }} 
         className='text-white my-2 font-bold active:scale-90 bg-red-500 px-2 rounded-lg items-end cursor-pointer '>
          REMOVE
          </button>
      </div>
    </div>
  )
}

export default CollectionCard