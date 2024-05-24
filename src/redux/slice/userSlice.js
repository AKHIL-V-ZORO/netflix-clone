import { createSlice } from "@reduxjs/toolkit";

const initialState = 
{
    currentUser: null,
}

export const userSlice = createSlice({
    name: 'user',

    initialState: initialState,

    reducers: {
        login: (state, action) => {
             state.currentUser = action.payload
        },
        logout: (state, action) => {
            state.currentUser = null
        }
    }
})

export const {login,logout}=userSlice.actions

export const selectUser=(state)=>state.user.currentUser

export default userSlice.reducer