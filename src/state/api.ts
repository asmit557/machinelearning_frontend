import { createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { GetKpisResponse,GetProductsResponse,GetTransactionsResponse } from "./types";
export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl:import.meta.env.VITE_BASE_URL}),
    reducerPath:"main",
    tagTypes:["kpis","Products","Transactions"],
    endpoints:(build)=>({
        getkpis:build.query<Array<GetKpisResponse>,void>({
            query:()=>"kpi/kpis",
            providesTags:["kpis"]
        }),
        getProducts:build.query<Array<GetProductsResponse>,void>({
            query:()=>"product/products",
            providesTags:["Products"]
        }),
        getTransactions:build.query<Array<GetTransactionsResponse>,void>({
            query:()=>"transaction/transactions",
            providesTags:["Transactions"]
        })
    })
})

export const { useGetkpisQuery,useGetProductsQuery ,useGetTransactionsQuery} = api;