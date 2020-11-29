import React from 'react';

// Containers
import Hero from '../../containers/wide/Hero/Hero';
import Features from '../../containers/wide/Features/Features';

const DesktopLandingPage = () => {
    return (
        <React.Fragment>
            <Hero />
            <div className="mobileDivider"></div>
            <Features />
        </React.Fragment>
    );
}

export default DesktopLandingPage;
