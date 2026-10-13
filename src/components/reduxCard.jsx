import React from 'react'
import { useDispatch } from 'react-redux';
import { addCollection, addToast } from '../redux/features/collectionSlice';


const ReduxCard = ({item}) => {

  const dispach = useDispatch()

  const saveInCollection = (item) => {
    dispach(addCollection(item))
    dispach(addToast())
  }

  return (
    <div className=' text-black w-80 h-60 rounded-2xl relative shadow-xl/50  transform transition-transform duration-300 ease-out hover:scale-108'>
      <div className='h-full rounded-2xl'>
         
         {item.type == 'photo' ? <img className='h-full w-full object-cover object-center rounded-2xl' src={item.src} alt="" loading='lazy' /> :''}
         {item.type == 'video' ? <video className='h-full w-full object-cover object-center rounded-2xl   ' autoPlay loop muted src={item.src} loading='lazy'></video> :''}
         {item.type == 'gif' ? <video className='h-full w-full object-cover object-center rounded-2xl   ' autoPlay loop muted src={item.src} loading='lazy' playsInline preload="none" ></video> :''}
         
      </div>
      <div id='textdata' className='px-2 py-3 bottom-0 overflow-y-hidden items-center gap-10 w-full flex text-white absolute justify-between'>
         
         <h1  className='capitalize h-9 font-mono w-[80%]'>{item.title}</h1>
         {/* <Bookmark onClick={saveOnClick} size={30} strokeWidth={1.75} className='text-white m-3 active:scale-90'/> */}
         <button onClick={() => {
            saveInCollection(item)
         }} 
         className='text-white my-2 font-bold active:scale-90 bg-blue-900 px-2 rounded-lg items-end cursor-pointer'>
          SAVE
          </button>
      </div>
    </div>
  )
}

export default ReduxCard