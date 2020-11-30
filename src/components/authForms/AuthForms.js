import React, { useState } from 'react';

// Styling
import formsStyling from './AuthForms.module.scss';

// Components
import LoginForm from '../loginForm/LoginForm';
import RegistrationForm from '../registrationForm/RegistrationForm';

const AuthForms = () => {
    const [IsSignin, setIsSignin] = useState(true);
    return (
        <div className={formsStyling.registration}>
            <div className={formsStyling.registrationText}>
                <h2 className={formsStyling.authTitle}>
                    {IsSignin? "Log In" : "Register"}
                </h2>
                <h3 className={formsStyling.authSubtitle}>
                    {IsSignin? "Welcome back!" : "For free!"}
                </h3>
            </div>
            {
                IsSignin? <LoginForm /> : <RegistrationForm />
            }
            <div className={formsStyling.authSeparator}>
                OR
            </div>
            <div className={formsStyling.authAlt}>
                <span className={formsStyling.authAltCTA}>
                    { IsSignin? "Don't have an account?" : 'Already have an account?' }
                </span>
                <button
                    className={formsStyling.authAltButton}
                    onClick={() => {
                        setIsSignin(!IsSignin);
                    }}
                >
                    { IsSignin? 'Register' : "Log In"}
                </button>
            </div>
        </div>
    );
}

export default AuthForms;
