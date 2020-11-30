import React from 'react';

// Containers
import Hero from '../../containers/wide/Hero/Hero';
import Features from '../../containers/wide/Features/Features';
import Authentication from '../../containers/wide/Authentication/Authentication';

const DesktopLandingPage = () => {
    return (
        <React.Fragment>
            <Hero />
            <div className="mobileDivider"></div>
            <Features />
            <Authentication />
        </React.Fragment>
    );
}

export default DesktopLandingPage;
