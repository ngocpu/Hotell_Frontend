import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    default:"light"
}

const themeSlice =createSlice({
    name:'theme',
    initialState,
    reducers:{
        toogleTheme:(state) =>{
            state.default = (state.default === 'light') ? 'dark':'light'
        }
    }
})


export  const {toogleTheme}=themeSlice.actions
export default  themeSlice.reducer;