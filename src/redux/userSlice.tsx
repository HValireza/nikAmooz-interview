import { createSlice } from "@reduxjs/toolkit";
import { UserSlice } from "../model/userSlice";

const initialState:UserSlice = {isLoggedIn:true, userInfo:{id:2,name:'ali'}}; // this should check cookies and return data or null

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.isLoggedIn = true;
            state.userInfo = action.payload;
        },
        logout:(state)=>{
            state.isLoggedIn = false;
            state.userInfo=null;
        }
    }
});

export const {login,logout}=userSlice.actions;
export default userSlice.reducer;