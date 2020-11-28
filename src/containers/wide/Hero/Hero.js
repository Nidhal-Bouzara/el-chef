import React from 'react';
import CTA from '../../../components/callToAttention/CTA';

// Styling
import heroStyling from './Hero.module.scss';

// Images
import wideChef from '../../../images/wideChef-min.png';
import crown from '../../../images/crown-min.png';

const Hero = () => {
    return (
        <section className={heroStyling.container}>
            <div className={heroStyling.left}>
                <CTA CTAStyling={heroStyling} />
                <div className={heroStyling.buttonsContainer}>
                    <div className={heroStyling.authButtonContainer}>
                        <img src={crown} className={heroStyling.authButtonDecoration} alt="" />
                        <button className={heroStyling.authButton}>Get Started</button>
                    </div>
                    <button className={heroStyling.contentButton}>Learn More</button>
                </div>
            </div>
            <div className={heroStyling.spacerBlock}></div>
            <div className={heroStyling.right}>
                <div className={heroStyling.mascotContainer}>
                    <img src={wideChef} className={heroStyling.mascot} alt="Mascot of El Chef" />
                    <div className={heroStyling.socialContainer}>
                        hello
                    </div>
                </div>

            </div>
        </section>  
    );
}

export default Hero;
