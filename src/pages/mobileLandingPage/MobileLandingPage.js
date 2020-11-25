import React from 'react';

// Styles
import styling from './MobileLandingPage.module.scss';

// Components
import Hero from '../../containers/mobile/Hero/Hero';
import Features from '../../containers/mobile/Features/Features';

const MobileLandingPage = () => {
    return (
        <React.Fragment>
            <Hero />
            <div className="mobileDivider"></div>
            <Features />
        </React.Fragment>
    )
}

export default MobileLandingPage;
