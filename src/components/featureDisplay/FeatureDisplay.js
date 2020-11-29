import React from 'react';

// Images
import ingredients from '../../images/ingredients.jpg';

// Styles
import fdStyle from './FeatureDisplay.module.scss';

const FeatureDisplay = () => {
    return (
        <div className={fdStyle.featureContainer}>
            <div className={fdStyle.imageContainer}>
                <img src={ingredients} className={fdStyle.image} alt=""/>
            </div>
            <h3 className={fdStyle.title}>Ingredients</h3>
            <p className={fdStyle.description}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</p>
        </div>
    );
}

export default FeatureDisplay;
