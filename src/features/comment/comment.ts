import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Comment } from "./type";

export const commentSlice = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCommentList: builder.query<Comment[], string>({
      query: () => `/comments`,
      keepUnusedDataFor: 600, // tác dụng là giữ dữ liệu trong 600 giây (10 phút) sau khi không còn sử dụng
    }),
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
});

export const { useGetCommentListQuery } = commentSlice;

export default commentSlice;
