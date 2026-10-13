import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearAllToast, clearCollection } from '../redux/features/collectionSlice'

const CollectionPages = () => {

  const dispach = useDispatch()

  

  const clearAllCollection = () => {
    dispach(clearCollection())
    if(collection.length > 0) 
    dispach(clearAllToast())
  }
  const collection = useSelector(state => state.collection.items)
  return (
    <div className='justify-center gap-5 px-5 py-6'>
      {collection.length > 0 ? <div className='flex justify-between font-semibold  '>
        <h1 className='text-shadow-lg/10 text-xl text-gray-600'>Your Collections</h1>
        <button onClick={() => {clearAllCollection()}} className='px-4 py-1 rounded-xl bg-red-700 text-shadow-lg/30 shadow-sm/30 active:scale-95'>CLEAR ALL</button>
      </div> : <h1 className=' flex justify-center text-center m-50 font-bold text-4xl'>Collection is empty!</h1> }
      

      <div className="flex flex-wrap justify-center gap-5 px-5 py-6 ">
        {collection.map((item, idx) => {
          return <div key={idx}  className='shadow-xl/50 rounded-2xl transform transition-transform duration-300 ease-in-out-out hover:scale-108'>
            <CollectionCard item={item} />
          </div>
        })}
      </div>
    </div>
  )
}

export default CollectionPages