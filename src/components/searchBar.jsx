import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
   const [text, setText] = useState('')

   const dispatch = useDispatch()

   function submitHandeler(e) {
      e.preventDefault()
      dispatch(setQuery(text))
   }
   return (
      <div className="px-4">
         <form
            onSubmit={submitHandeler}
            className="
               mx-auto max-w-4xl
               flex items-center gap-3
               bg-white
               rounded-full
               px-5 py-3
               shadow-md
               hover:shadow-lg
               transition-shadow
            ">
            <input
               type="text"
               value={text}
               onChange={(e) => setText(e.target.value)}
               placeholder="Search Anything..."
               className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-gray-700
                  text-lg
                  placeholder-gray-400
               "/>

            <button
               type="submit"
               className="
                  px-6 py-1
                  text-blue-600
                  bg-white
                  text-xl font-medium
                  active:scale-95
                  transition
               ">
               Search
            </button>
         </form>
      </div>
   )
}

export default SearchBar