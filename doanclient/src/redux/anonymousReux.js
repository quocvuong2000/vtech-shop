import { createSlice } from "@reduxjs/toolkit";

const anonymousSlice = createSlice( {
    name:"Anonymous",
    initialState: {
        products: [],
        isFetching: false,
        isError: false
    },
    reducers : {
        addAnonymousStart : (state) => {
            state.isFetching = true;
        },
        addAnonymousSuccess: (state, action) => {
            state.products = action.payload;
            state.isFetching = false;
        },
        addAnonymousFailure : (state) => {
            state.isFetching = false;
            state.isError = true;
        }

    }
})

export const {
    addAnonymousFailure,
    addAnonymousStart,
    addAnonymousSuccess
} = anonymousSlice.actions;

export default anonymousSlice.reducer;