//allows us to make endpoints that we can use to call our backend 
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse} from "./types";

export const api = createApi({ 
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }), //VITE_BASE_URL is the URL we will call on every API call
    reducerPath: "main",
    tagTypes: ["Kpis", "Products", "Transactions"],
    endpoints: (build) => ({ //where we create the API calls
        getKPIs: build.query<Array<GetKpisResponse>, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"]
        }),
        getProducts: build.query<Array<GetProductsResponse>, void>({
            query: () => "product/products/",
            providesTags: ["Products"]
        }),
        getTransactions: build.query<Array<GetTransactionsResponse>, void>({
            query: () => "transaction/transactions/",
            providesTags: ["Transactions"]
        }),
    }),
})

export const { useGetKPIsQuery, useGetProductsQuery, useGetTransactionsQuery } = api;