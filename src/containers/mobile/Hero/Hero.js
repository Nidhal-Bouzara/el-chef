import React, { useRef } from 'react';

// Images
import chefMascot from '../../../images/chef-min.png';
import chefHat from '../../../images/chefHat-min.png';

// Styles
import heroStyle from './Hero.module.scss';

const Hero = ({ scrollHeight }) => {
    const imageRef = useRef(null);
        return (
            <section className="sectionLayout" >
                <div className={heroStyle.heroContent}>
                    <img src={chefHat} className={heroStyle.heroLogo} alt="El Chef logo" />
                    <h1 className={heroStyle.title}>El Chef</h1>
                    <h2 className="subTitle">A dish for every kitchen</h2>
                    <p className={heroStyle.description}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>
                </div>
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
