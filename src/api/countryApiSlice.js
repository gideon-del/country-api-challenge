import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export  const  countryApi = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({baseUrl:'https://restcountries.com/v3.1/'}),
    tagTypes:['Country'],
    endpoints:(builder)=>({
        getCountry:builder.query({
            query:(path) => `${path}`
        })
        
    })
})

export const {useGetCountryQuery} =countryApi;