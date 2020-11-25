import React from 'react';

// Components
import ItemShowcase from '../../../components/mobile/ItemShowcase/ItemShowcase';

// Styling
// import styling from './Features.module.scss';

// Images
import feature from '../../../images/featureImage-min.png';
import feature2 from '../../../images/featureImage2-min.png';
import feature3 from '../../../images/featureImage3-min.png';

const Features = () => {
    return (
        <section
            className="sectionLayout"
            style={{ height: '100vh'}}
        >
            <h3
                className="subTitle"
                style={{ margin: '5rem 0 2rem' }}
            >Find the perfect dish for you</h3>
            <ItemShowcase 
                title={"Ingredients"}
                description={"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain."}
                image={feature}
            />
            <ItemShowcase 
                title={"Nutrition"}
                description={"Nor again is there anyone who loves or there anyone who loves or pursues or desires to obtain and pursues or desires to obtain pain of itself, because it is pain."}
                image={feature3}
            />
            <ItemShowcase 
                title={"Taste"}
                description={"Nor again is there anyone who loves then there anyone who loves or pursues or desires to obtain or pursues or desires to obtain pain of itself, because it is pain."}
                image={feature2}
            />
        </section>
    );
}

export default Features;
