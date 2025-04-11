import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name:'user',
    initialState:{
        authenticated: JSON.parse(localStorage.getItem('token')) || false,
    },
    reducers:{
        setUser(state, action){
            console.log('action.payload', action.payload);
            state.authenticated = action.payload;
            localStorage.setItem('token', JSON.stringify(action.payload.token));        
        }
    }
});

export const {setUser} = user.actions;
export const userReducer = user.reducer;