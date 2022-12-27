import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const YoutubeCoreApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://youtube-v3-alternative.p.rapidapi.com/",
     prepareHeaders: (headers) => {
       headers.set(
         'X-RapidAPI-Key','8e6b59ceafmsh8e21aa2fb3db717p17188bjsn89e9ef185a45'
       );
       return headers;
     },
  }),
  endpoints: (builder) => ({
    getAllTrendingVideos: builder.query({ query: () => "/trending?geo=NG&lang=en" }),
    getRelatedVideos: builder.query({ query: ( ) => `/related?id=dQw4w9WgXcQ&geo=US&lang=en` }),
  }),
});
export const { useGetAllTrendingVideosQuery, useGetRelatedVideosQuery } = YoutubeCoreApi;
