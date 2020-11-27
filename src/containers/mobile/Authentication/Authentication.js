import React, { useState } from 'react';
import RegistrationForm from '../../../components/mobile/registrationForm/RegistrationForm';
import LoginForm from '../../../components/mobile/loginForm/LoginForm';

// Styling
import authStyling from './Authentication.module.scss';

const Authentication = () => {
    const [IsSignin, setIsSignin] = useState(true);
    return (
        <section className="sectionLayout">
            <h3
                className="subTitle"
                style={{ margin: '5rem 0 2rem' }}
            >Get started with El Chef</h3>
            <div className={authStyling.registration}>
                <div className={authStyling.registrationText}>
                    <h2 className={authStyling.authTitle}>
                        {IsSignin? "Log In" : "Register"}
                    </h2>
                    <h3 className={authStyling.authSubtitle}>
                        {IsSignin? "Welcome back!" : "For free!"}
                    </h3>
                </div>
                {
                    IsSignin? <LoginForm authStyling={authStyling} /> : <RegistrationForm authStyling={authStyling} />
                }
                <div className={authStyling.authSeparator}>
                    OR
                </div>
                <div className={authStyling.authAlt}>
                    <span className={authStyling.authAltCTA}>
                        { IsSignin? "Don't have an account?" : 'Already have an account?' }
                    </span>
                    <button
                        className={authStyling.authAltButton}
                        onClick={() => {
                            setIsSignin(!IsSignin);
                        }}
                    >
                        { IsSignin? 'Register' : "Log In"}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Authentication;
