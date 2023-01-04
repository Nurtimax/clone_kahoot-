import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const createTestSliceApi = createApi({
  reducerPath: "createTestSliceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["createTest"],
  endpoints: (build) => ({
    getTestData: build.query<any, string>({
      query: (item) => `item`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: "POST" as const, id })),
              { type: "createTest", id: "LIST" },
            ]
          : [{ type: "createTest", id: "LIST" }],
    }),
    postCreatedData: build.mutation<undefined, any>({
      query: (item) => ({
        url: "item",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["createTest"],
    }),
    putCreateData: build.mutation<undefined, any>({
      query: (item) => ({
        url: `item/${item.id}`,
        method: "PUT",
        body: item.newData,
      }),
      invalidatesTags: ["createTest"],
    }),
  }),
});

export const {
  useGetTestDataQuery,
  usePostCreatedDataMutation,
  usePutCreateDataMutation,
} = createTestSliceApi;
