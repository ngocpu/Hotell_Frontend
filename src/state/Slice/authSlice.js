import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userInfo:null,
    isLoading:false,
    error:false
}

const authSlide = createSlice({
    name:"user",
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.isLoading=true;
        },
        loginSuccess:(state,action) =>{
            state.userInfo= action.payload;
            state.isLoading = false,
            state.error=false
        },
        loginFailed:(state) =>{
            state.error= true,
            state.isLoading= false
        },
        logoutStart:(state) =>{
            state.isLoading=true
        },
        logoutSuscess:(state) =>{
            state.isLoading= false,
            state.userInfo= null,
            state.error = false
        },
        logoutFailed:(state) =>{
            state.isLoading = false,
            state.error = true
        }
    }
})
export const {loginStart, loginSuccess, loginFailed, logoutStart, logoutSuscess, logoutFailed} = authSlide.actions
export default authSlide.reducer