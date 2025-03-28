import { configureStore } from "@reduxjs/toolkit";
import authApi from "../services/apiAuth";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userReducer } from "./slices/userSlice";
import challengeApi from "../services/challengeApi";

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [challengeApi.reducerPath]: challengeApi.reducer,
        user: userReducer
    },
    middleware:(getDefaultMiddleware) =>{
        return getDefaultMiddleware().concat(authApi.middleware, challengeApi.middleware);
    },
});

setupListeners(store.dispatch);

export default store;