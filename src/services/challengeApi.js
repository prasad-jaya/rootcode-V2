import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const challengeApi = createApi({
    reducerPath: "challengeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://2hol1zaqsj.execute-api.us-east-1.amazonaws.com/dev" }),
    endpoints(builder){
        return {
            getChallenge: builder.query({
                query(page) {
                    return {
                        url: `/challenges`,
                        params: { 
                            page: page,
                            limit: 6,
                        },
                        method: "GET",
                    };
                }
            }),
            getChallengeBySortedId: builder.query({
                query(id, page) {
                    return {
                        url: `/challenges?`,
                        params: { language: id, page: page, limit: 6, },
                        method: "GET",
                    };
                }
            }),
            getChallengeByPage: builder.query({
                query(page) {
                    return {
                        url: `/challenges?`,
                        params: { 
                            page: page,
                            limit: 6,
                        },
                        method: "GET",
                    };
                }
            }),
            getChallengeById: builder.query({
                query(id) {
                    return {
                        url: `/challenges?`,
                        params: { id: id },
                        method: "GET",
                    };
                }
            }),

        }
       
    },
});

export const { useGetChallengeQuery, useGetChallengeBySortedIdQuery, useGetChallengeByPageQuery, useGetChallengeByIdQuery } = challengeApi;
export default challengeApi;