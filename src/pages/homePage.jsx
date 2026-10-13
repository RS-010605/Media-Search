import React from 'react'
import SearchBar from '../components/searchBar'
import Tabs from '../components/Tabs'
import ReduxGrid from '../components/reduxGrid'
const HomePage = () => {
  return (
    <div className='min-h-screen text-white justify-center gap-5'>
      <Tabs />
      <ReduxGrid />
    </div>
  )
}

export default HomePage