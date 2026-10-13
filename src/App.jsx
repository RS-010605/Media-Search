import React from 'react'
import SearchBar from './components/searchBar'
import Tabs from './components/Tabs'
import Navbar from './components/Navbar'
import HomePage from './pages/homePage'
import { Route, Routes } from 'react-router-dom'
import CollectionPages from './pages/collectionPages'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='min-h-screen bg-[#f5f5f5] text-white justify-center gap-5'>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/collection' element={<CollectionPages />}/>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
