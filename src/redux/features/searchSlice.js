import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
   name:"search",
   initialState:{
      query:'',
      activeTab:'photo',
      results:[],
      loading:false,
      error:null,
      cache:{}
   },

   reducers:{
      setQuery(state,actino){
         state.query = actino.payload
      },

      setActiveTab(state,actino){
         state.activeTab = actino.payload
      },

      setResults(state,actino){
         state.results = actino.payload
         state.loading = false
      },

      setLoading(state){
         state.loading = true
         state.error = null
      },

      setError(state,actino){
         state.error = actino.payload
         state.loading = false
      },

      clearResults(state) {
         state.results = []
      },

      saveToCache(state, action) {
         const { key, data } = action.payload;
         state.cache[key] = data;
      }
   }
})

export const { setQuery, setActiveTab, setResults, setLoading, setError, clearResults, saveToCache } = searchSlice.actions

export default searchSlice.reducer