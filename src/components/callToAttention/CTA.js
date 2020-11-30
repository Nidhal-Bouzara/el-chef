import React from 'react';

// Images
import chefHat from '../../images/chefHat-min.png';

const CTA = ({CTAStyling}) => {
    return (
        <div className={CTAStyling.heroContent}>
            <img src={chefHat} className={CTAStyling.heroLogo} alt="El Chef logo" />
            <h1 className={CTAStyling.title}>El Chef</h1>
            <h2 className="subTitle" style={{ fontSize: '2rem' }}>A dish for every kitchen</h2>
            <p className={CTAStyling.description}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>
        </div>
    );
}

export default CTA;
