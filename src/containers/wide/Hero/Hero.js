import React from 'react';
import CTA from '../../../components/callToAttention/CTA';

// Styling
import heroStyling from './Hero.module.scss';

// Images
import wideChef from '../../../images/wideChef-min.png';
import crown from '../../../images/crown-min.png';
import spoonWatermark from '../../../images/spoonWatermark-min.png';

// Fonts
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { 
     faInstagramSquare,
     faFacebookSquare,
     faTwitterSquare
  } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
    return (
        <section className={heroStyling.container}>
            <img src={spoonWatermark} className={heroStyling.spoonWatermark} alt="" />
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
                        <div className={heroStyling.socialTitle}>Find us on</div>
                        <div className={heroStyling.socialIconsContainer}>
                            <a href="https://www.instagram.com">
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </a>
                            <a href="https://www.facebook.com">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </a>
                            <a href="https://www.twitter.com">
                                <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>  
    );
}

export default Hero;
