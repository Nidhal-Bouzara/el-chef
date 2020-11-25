import React from 'react';

// Styling
import styling from './ItemShowcase.module.scss';

const ItemShowcase = ({ title, description, image }) => {
    return (
        <div className={styling.container}>
            <div className={styling.content}>
                <h3 className={styling.contentTitle}>{title}</h3>
                <p className={styling.contentBody}>{description}</p>
                <button className={styling.contentButton}>Read More</button>
            </div>
            <img src={image} className={styling.image} alt="food" />
        </div>
    );
}

export default ItemShowcase;
