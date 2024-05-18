import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchInfo: null,
    isLoading: false,
    error: false
}

const searchSlide = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchStart: (state) => {
            state.isLoading = true;
        },
        setSearchSuccess: (state, action) => {
            state.searchInfo = action.payload;
            state.isLoading = false;
            state.error = false;
        },
        setSearchFailed: (state) => {
            state.error = true;
            state.isLoading = false;
        },
        clearSearchInfo: (state) => {
            state.searchInfo = null;
        }
    }
});

export const { setSearchStart, setSearchSuccess, setSearchFailed, clearSearchInfo } = searchSlide.actions;
export default searchSlide.reducer;
