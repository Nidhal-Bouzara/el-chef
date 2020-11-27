import React, { useState } from 'react';

// JS utilitis
import produce from 'immer';

// Icons
import { faAt, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Forms
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = ({ authStyling }) => {
    const regSchema = Yup.object().shape({
        email: Yup.string()
                .min(5, 'Email too short')
                .max(40, 'Email too long')
                .email('Invalid Email format')
                .required('This field is required'),
        password: Yup.string()
                .min(8, 'Password too short (must be longer than 8 characters)')
                .max(70, 'Password too long (must be shorter than 70 characters)')
                .required('This field is required')
    })

    const [registrationEmailState, setRegistrationEmailState] = useState({
        positioning: {
            top: null,
            left: null
        },
        color: null
    });

    const [registrationPasswordState, setRegistrationPasswordState] = useState({
        positioning: {
            top: null,
            left: null
        },
        color: null
    });

    const registrationStyling = {
        positioning: {
            top: '-0.5rem',
            left: '0'
        },
        validatingColor: '#76C8FF',
        invalidColor: '#FF7676',
        validColor: '#76FF88',
        defaultColor: '#D4D8FF'
    }
    return (
        <React.Fragment>
                            <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={regSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }
                }
                >
                    {({ isSubmitting, values, handleBlur, errors }) => (
                        <Form className={authStyling.form}>
                            <div className={authStyling.inputContainer}>
                                <FontAwesomeIcon
                                    className={authStyling.inputIcon}
                                    icon={faAt}
                                    style={{color: registrationEmailState.color}}
                                />
                                <label
                                    htmlFor="email"
                                    className={authStyling.inputLabel}
                                    style={{
                                        ...registrationEmailState.positioning,
                                        color: registrationEmailState.color
                                    }}
                                    >E-Mail</label>
                                <Field
                                    className={authStyling.input}
                                    type="email"
                                    name="email"
                                    id="email"
                                    onFocus={() => {
                                        setRegistrationEmailState(
                                            produce(registrationEmailState, draft => {
                                                draft.color = registrationStyling.validatingColor
                                                draft.positioning = {
                                                    ...registrationStyling.positioning
                                                }
                                            })
                                        )
                                    }}
                                    onBlur={(e) => {
                                        if (values.email && !errors.email) {
                                            setRegistrationEmailState(
                                                produce(registrationEmailState, draft => {
                                                    draft.color = registrationStyling.validColor
                                                })
                                            )
                                        } else if (values.email && errors.email ) {
                                            setRegistrationEmailState(
                                                produce(registrationEmailState, draft => {
                                                    draft.color = registrationStyling.invalidColor
                                                    draft.positioning = {...registrationStyling.positioning}
                                                })
                                            )
                                        } else if (errors.email && !values.email) {
                                            setRegistrationEmailState(
                                                produce(registrationEmailState, draft => {
                                                    draft.color = registrationStyling.invalidColor
                                                    draft.positioning = {
                                                        top: null,
                                                        left: null
                                                    }
                                                })
                                            )
                                        } else {
                                            setRegistrationEmailState(
                                                produce(registrationEmailState, draft => {
                                                    draft.color = null
                                                    draft.positioning = {
                                                        top: null,
                                                        left: null
                                                    }
                                                })
                                            )
                                        }
                                        handleBlur(e);
                                    }}

                                />
                            </div>
                            <div className={authStyling.inputContainer}>
                                <FontAwesomeIcon
                                    className={authStyling.inputIcon}
                                    icon={faUnlock}
                                    style={{color: registrationPasswordState.color}}
                                />
                                <label
                                    htmlFor="password"
                                    className={authStyling.inputLabel}
                                    style={{
                                        ...registrationPasswordState.positioning,
                                        color: registrationPasswordState.color
                                    }}
                                    >Password</label>
                                <Field
                                    className={authStyling.input}
                                    type="password"
                                    name="password"
                                    id="password"
                                    onFocus={() => {
                                        setRegistrationPasswordState(
                                            produce(registrationPasswordState, draft => {
                                                draft.color = registrationStyling.validatingColor
                                                draft.positioning = {
                                                    ...registrationStyling.positioning
                                                }
                                            })
                                        )
                                    }}
                                    onBlur={(e) => {
                                        if (values.password && !errors.password) {
                                            setRegistrationPasswordState(
                                                produce(registrationPasswordState, draft => {
                                                    draft.color = registrationStyling.validColor
                                                })
                                            )
                                        } else if (values.password && errors.password ) {
                                            setRegistrationPasswordState(
                                                produce(registrationPasswordState, draft => {
                                                    draft.color = registrationStyling.invalidColor
                                                    draft.positioning = {...registrationStyling.positioning}
                                                })
                                            )
                                        } else if (errors.password && !values.password) {
                                            setRegistrationPasswordState(
                                                produce(registrationPasswordState, draft => {
                                                    draft.color = registrationStyling.invalidColor
                                                    draft.positioning = {
                                                        top: null,
                                                        left: null
                                                    }
                                                })
                                            )
                                        } else {
                                            setRegistrationPasswordState(
                                                produce(registrationPasswordState, draft => {
                                                    draft.color = null
                                                    draft.positioning = {
                                                        top: null,
                                                        left: null
                                                    }
                                                })
                                            )
                                        }
                                        handleBlur(e);
                                    }}
                                />
                            </div>
                            <div className={authStyling.inputButtonContainer}>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={authStyling.inputButton}
                                >
                                    Register
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>

        </React.Fragment>
    );
}

export default RegistrationForm;