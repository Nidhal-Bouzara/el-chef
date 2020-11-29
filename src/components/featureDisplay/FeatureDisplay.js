import React from 'react';

// Styles
import fdStyle from './FeatureDisplay.module.scss';

const FeatureDisplay = ({ image, title, description }) => {
    return (
        <div className={fdStyle.featureContainer}>
            <div className={fdStyle.imageContainer}>
                <img src={image} className={fdStyle.image} alt=""/>
            </div>
            <h3 className={fdStyle.title}>
                {title}
            </h3>
            <p className={fdStyle.description}>
                {description}    
            </p>
        </div>
    );
}

export default FeatureDisplay;
