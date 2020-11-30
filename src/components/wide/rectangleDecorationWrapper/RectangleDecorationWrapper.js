import React from 'react';

// Styling
import rectStyle from './RectangleDecorationWrapper.module.scss';

const RectangleDecorationWrapper = ({children, title}) => {
    return (
        <section className={rectStyle.container}>
            <div className={rectStyle.content}>
                <div className={rectStyle.topDecoration}></div>
                <h2 className={rectStyle.subTitle}>{title}</h2>
                <div className={rectStyle.featuresContainer}>
                    {children}
                </div>
                <div className={rectStyle.bottomDecoration}></div>
            </div>
        </section>
    );
}

export default RectangleDecorationWrapper;
