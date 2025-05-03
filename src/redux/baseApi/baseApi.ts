import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://bikkhatobazar.magneticcodes.com/api" }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => `/product`,
    }),
    createAnOrder: build.mutation({
      query: (orderData) => ({
        url: `/order`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: orderData,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useCreateAnOrderMutation } = baseApi;