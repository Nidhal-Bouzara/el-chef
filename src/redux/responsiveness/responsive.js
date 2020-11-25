import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mobile: true,
    hasEnoughHeight: false,
}

const responsiveSlice = createSlice({
    name: 'responsive',
    initialState,
    reducers: {
        isMobile: (state, action) => {state.mobile = action.payload},
        hasEnoughHeight: (state, action) => {state.hasEnoughHeight = action.payload}
    }
})

export const { isMobile, hasEnoughHeight } = responsiveSlice.actions;
export default responsiveSlice.reducer;