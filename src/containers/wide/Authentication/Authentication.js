import React from 'react';

// Components
import AuthForms from '../../../components/authForms/AuthForms';
import RectangleDecorationWrapper from '../../../components/wide/rectangleDecorationWrapper/RectangleDecorationWrapper';

// Styling
import authStyling from './Authentication.module.scss';

// Images
import nutritionImage from '../../../images/nutrition-min.png';

const Authentication = () => {
    return (
        <section style={{position: 'relative'}}>
            <RectangleDecorationWrapper
                title="Find the perfect dish for you"
            >
                <AuthForms />
                <div className={authStyling.descriptionContainer}>
                    <div className={authStyling.descriptionHeadline}>
                        <h2 className={authStyling.descriptionTitle}>Take Control of your food right now</h2>
                        <h4 className={authStyling.descriptionSubtitle}>Get started for free!</h4>
                    </div>
                    <div className={authStyling.imageContainer}>
                        <img src={nutritionImage} alt="Explaining why you should use el chef" />
                    </div>
                    <p className={authStyling.description}>
                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
                    </p>
                </div>
            </RectangleDecorationWrapper>
        </section>
    );
}

export default Authentication;
