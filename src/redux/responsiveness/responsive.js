import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mobile: true,
    hasEnoughHeight: false,
    hasEnoughWidth: true
}

const responsiveSlice = createSlice({
    name: 'responsive',
    initialState,
    reducers: {
        isMobile: (state, action) => {state.mobile = action.payload},
        hasEnoughHeight: (state, action) => {state.hasEnoughHeight = action.payload},
        hasEnoughWidth: (state, action) => {state.hasEnoughWidth = action.payload}
    }
})

export const { isMobile, hasEnoughHeight, hasEnoughWidth } = responsiveSlice.actions;
export default responsiveSlice.reducer;