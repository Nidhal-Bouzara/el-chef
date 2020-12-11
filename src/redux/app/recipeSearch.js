import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filterList: [],
}

const recipeSearchSlice = createSlice({
    name: 'recipeSearch',
    initialState,
    reducers: {
        setFilterList: (state, action) => {state.filterList = [action.payload].concat(state.filterList)},
        updateCyclePosition: (state, action) => {
            state.filterList[action.payload.itemIndex].cyclePosition = action.payload.newCycle
        }

    }
})

export const { setFilterList, updateCyclePosition } = recipeSearchSlice.actions;
export default recipeSearchSlice.reducer;