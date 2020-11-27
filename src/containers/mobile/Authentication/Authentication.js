import React from 'react';
import RegistrationForm from '../../../components/mobile/registrationForm/RegistrationForm';

// Styling
import authStyling from './Authentication.module.scss';

const Authentication = () => {


    return (
        <section className="sectionLayout">
            <h3
                className="subTitle"
                style={{ margin: '5rem 0 2rem' }}
            >Get started with El Chef</h3>
            <div className={authStyling.registration}>
                <div className={authStyling.registrationText}>
                    <h2 className={authStyling.authTitle}>Register</h2>
                    <h3 className={authStyling.authSubtitle}>For free!</h3>
                </div>
                <RegistrationForm authStyling={authStyling}/>
            </div>
        </section>
    );
}

export default Authentication;
