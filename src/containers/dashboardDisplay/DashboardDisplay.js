import React from 'react';

// Components
import RecipeDisplay from '../../components/wide/recipeDiplay/RecipeDisplay';

const DashboardDisplay = () => {
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
            <RecipeDisplay />
            <RecipeDisplay />
            <RecipeDisplay />
        </div>
    );
}

export default DashboardDisplay;
