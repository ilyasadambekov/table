import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/'
  }),
  endpoints: build => ({
    getUsers: build.query<UsersResponse, void>({
      query: () => 'users'
    }),
  })
});

export const {useGetUsersQuery} = api;