import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
    reducerPath:'login',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://reqres.in/api/',
    }),
    endpoints(builder){
        return {
            login:builder.mutation({
                query:(user) =>{
                    return {
                        url:'/login',
                        method:'POST',
                        body:{
                            email:user.email,
                            password:user.password
                        }
                    }
                }
            })
        }
    }
});

export const {useLoginMutation} = authApi;
export default authApi;