import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { countryApi } from "../api/countryApiSlice";
import countrySlice from "./countrySlice";
const store = configureStore({
   reducer:{
     [countryApi.reducerPath]: countryApi.reducer,
    filters : countrySlice,

   },
   middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(countryApi.middleware)
   }
})
setupListeners(store.dispatch)

export default store