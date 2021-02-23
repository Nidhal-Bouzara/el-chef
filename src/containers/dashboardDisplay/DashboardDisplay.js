import React from 'react';
import { useSelector } from 'react-redux';

// Components
import RecipeDisplay from '../../components/wide/recipeDiplay/RecipeDisplay';

const DashboardDisplay = () => {
    const recipeInfo = useSelector(state => state.recipeSearch.recipeInfo);
    let listRender;
    if (recipeInfo.length > 0) {
        listRender = recipeInfo.map(item => {
            return (
                <RecipeDisplay
                    key={item.id}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    rating={item.rating}
                    summary={item.summary}
                    extendedIngredients={item.extendedIngredients}
                    vegetarian={item.vegetarian}
                    readyInMinutes={item.readyInMinutes}
                    dishTypes={item.dishTypes}
                />
            )
        })
    } else {
        listRender = (<div>Apply some filters to see recipes</div>)
    }
    return (
        <div
            style={{
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {
                listRender
            }
        </div>
    );
}

export default DashboardDisplay;
