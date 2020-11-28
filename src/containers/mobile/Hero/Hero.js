import React, { useRef } from 'react';

// Components
import CTA from '../../../components/callToAttention/CTA';

// Images
import chefMascot from '../../../images/chef-min.png';

// Styles
import heroStyle from './Hero.module.scss';

const Hero = () => {
    const imageRef = useRef(null);
        return (
            <section className="sectionLayout" >
                <CTA CTAStyling={heroStyle} />
                <div
                    className={heroStyle.heroImageContainer}
                    ref={imageRef}
                >
                    <img
                        className={heroStyle.heroImage}
                        src={chefMascot}
                        alt="The Mascot of El Chef"
                    />
                    <button
                        className={heroStyle.button}
                        onClick={() => {window.scrollTo(0, (imageRef.current.offsetTop + imageRef.current.offsetHeight))}}
                    >
                        <span className={heroStyle.buttonTitle}>Learn More</span>
                        <div className={heroStyle.buttonArrow}></div>
                    </button>
                </div>
            </section>
        );
}

export default Hero;
