import { createSlice } from "@reduxjs/toolkit"
import { Bounce, toast } from "react-toastify"
const initialState = {
   items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
   name: 'collection',
   initialState,
   reducers: {
      addCollection: (state, actino) => {
         const alreadyExists = state.items.find(
            item => item.id === actino.payload.id)

         if (!alreadyExists) {
            state.items.push(actino.payload);
            localStorage.setItem('collection', JSON.stringify(state.items))
         }
      },

      removeCollection: (state, actino) => {
         state.items = state.items.filter(
            item => item.id != actino.payload
         )
         localStorage.setItem('collection', JSON.stringify(state.items))
      },

      clearCollection: (state) => {
         state.items = []
         localStorage.removeItem('collection')
      },

      addToast: () => {
         toast.success('Added in Collection Successfully ✅', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
         });
      },

      removeToast: () => {
         toast.error('Item Removed From Collection ', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
         });
      },

      clearAllToast: () => {
         toast.info('All Collection Cleared', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
         });
      }
   }
})

export const {
   addCollection,
   removeCollection,
   clearCollection,
   addToast,
   removeToast,
   clearAllToast

} = collectionSlice.actions

export default collectionSlice.reducer;