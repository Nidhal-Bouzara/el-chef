import React from 'react';
import FeatureDisplay from '../../../components/featureDisplay/FeatureDisplay';

// Images
import ingredientsImage from '../../../images/ingredients-min.png';
import nutritionImage from '../../../images/nutrition-min.png';
import tasteImage from '../../../images/taste-min.png';
import RectangleDecorationWrapper from '../../../components/wide/rectangleDecorationWrapper/RectangleDecorationWrapper';

const Features = () => {
    return (
                <RectangleDecorationWrapper
                    title="Find the perfect dish for you"
                >
                    <FeatureDisplay
                        image={ingredientsImage}
                        title={`
                        Ingredients
                        `}
                        description={`
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.
                        `}
                    />
                    <FeatureDisplay
                        image={nutritionImage}
                        title={`
                        Nutrition
                        `}
                        description={`
                        Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.
                        `}
                    />
                    <FeatureDisplay
                        image={tasteImage}
                        title={`
                        Taste
                        `}
                        description={`
                        But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.
                        `}
                    />
                </RectangleDecorationWrapper>
    );
}

export default Features;
