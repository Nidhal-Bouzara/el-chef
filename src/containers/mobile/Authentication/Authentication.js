import React from 'react';

// Components
import AuthForms from '../../../components/authForms/AuthForms';

const Authentication = () => {

    return (
        <section className="sectionLayout">
            <h3
                className="subTitle"
                style={{ margin: '5rem 0 2rem', fontSize: '2rem' }}
            >Get started with El Chef</h3>
            <AuthForms />
        </section>
    );
}

export default Authentication;
