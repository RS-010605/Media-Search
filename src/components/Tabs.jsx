import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {
  const tabs = ['photo', 'video', 'gif']

  const dispach = useDispatch()
  const activeTab = useSelector((state) => state.search.activeTab) //active tab current value from searchSlice.js

  return (
    <div className='flex gap-3 m-5 justify-center font-bold'>
      {tabs.map(function (elem, idx) {
        return <button
          className={`
            w-25 px-4 py-1 rounded-full capitalize cursor-pointer
            text-lg font-medium
            transition-all duration-200
            active:scale-95
            ${activeTab === elem
              ? 'bg-blue-100 text-blue-700 shadow-sm'
              : 'bg-white text-gray-600 hover:bg-gray-100'
            }
          `}
          key={idx}
          onClick={() => {
            dispach(setActiveTab(elem))
          }}
        >{elem}</button>
      })}
    </div>
  )
}

export default Tabs