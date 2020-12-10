import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filterList: [],
}

const recipeSearchSlice = createSlice({
    name: 'recipeSearch',
    initialState,
    reducers: {
        setFilterList: (state, action) => {state.filterList = action.payload}
    }
})

export const { setFilterList } = recipeSearchSlice.actions;
export default recipeSearchSlice.reducer;