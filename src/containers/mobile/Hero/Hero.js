import React from 'react';
import { useSelector } from 'react-redux';

// Images
import chefMascot from '../../../images/chef-min.png';
import chefHat from '../../../images/chefHat-min.png';

// Styles
import heroStyle from './Hero.module.scss';

const Hero = () => {
    const screenHasEnoughHeight = useSelector(state => state.responsive.hasEnoughHeight);
    const scrollHeight = screenHasEnoughHeight? window.innerHeight + 5 : 974;
        return (
            <section
                className="sectionLayout"
                style={{
                    height: '100vh',
                    minHeight: '974px'
                }}
            >
                <div className={heroStyle.heroContent}>
                    <img src={chefHat} className={heroStyle.heroLogo} alt="El Chef logo" />
                    <h1 className={heroStyle.title}>El Chef</h1>
                    <h2 className="subTitle">A dish for every kitchen</h2>
                    <p className={heroStyle.description}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.</p>
                </div>
                <div
                    style={
                        !screenHasEnoughHeight? {
                            top: '280px',
                            bottom: 'auto',
                        } : null
                    }
                    className={heroStyle.heroImageContainer}
                >

                    <img
                        className={heroStyle.heroImage}
                        src={chefMascot}
                        alt="The Mascot of El Chef"
                    />
                    <button
                        className={heroStyle.button}
                        onClick={() => {window.scrollTo(0, scrollHeight)}}
                    >
                        <span className={heroStyle.buttonTitle}>Learn More</span>
                        <div className={heroStyle.buttonArrow}></div>
                    </button>
                </div>
            </section>
        );
}

export default Hero;
