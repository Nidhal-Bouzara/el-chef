import React from 'react';
import FeatureDisplay from '../../../components/featureDisplay/FeatureDisplay';

// Styles
import featuresStyle from './Features.module.scss';

const Features = () => {
    return (
        <section className={featuresStyle.container}>
            <div className={featuresStyle.content}>
                <div className={featuresStyle.topDecoration}></div>
                <h2 className={featuresStyle.subTitle}>Find the perfect dish for you</h2>
                <div className={featuresStyle.featuresContainer}>
                    <FeatureDisplay />
                    <FeatureDisplay />
                    <FeatureDisplay />
                </div>
                <div className={featuresStyle.bottomDecoration}></div>
            </div>
        </section>
    );
}

export default Features;
