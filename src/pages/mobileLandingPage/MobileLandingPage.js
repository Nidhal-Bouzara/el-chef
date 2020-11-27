import React from 'react';

// Styles
// import styling from './MobileLandingPage.module.scss';

// Components
import Hero from '../../containers/mobile/Hero/Hero';
import Features from '../../containers/mobile/Features/Features';
import Authentication from '../../containers/mobile/Authentication/Authentication';

const MobileLandingPage = () => {
    return (
        <React.Fragment>
            <Hero />
            <div className="mobileDivider"></div>
            <Features />
            <div className="mobileDivider"></div>
            <Authentication />
        </React.Fragment>
    )
}

export default MobileLandingPage;
