import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filterList: [],
    recipeList: [],
    recipeInfo: []
}

const recipeSearchSlice = createSlice({
    name: 'recipeSearch',
    initialState,
    reducers: {
        setFilterList: (state, action) => {state.filterList = [action.payload].concat(state.filterList)},
        updateCyclePosition: (state, action) => {
            state.filterList[action.payload.itemIndex].cyclePosition = action.payload.newCycle;
        },
        setRecipeList: (state, action) => {
            state.recipeList = action.payload;
        },
        setRecipeInfo: (state, action) => {
            state.recipeInfo = action.payload;
        }
    }
})

export const { setFilterList, updateCyclePosition, setRecipeList, setRecipeInfo } = recipeSearchSlice.actions;
export default recipeSearchSlice.reducer;