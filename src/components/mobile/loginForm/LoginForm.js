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
    const loginSchema = Yup.object().shape({
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

    const [loginEmailState, setLoginEmailState] = useState({
        positioning: {
            top: null,
            left: null
        },
        color: null
    });

    const [loginPasswordState, setLoginPasswordState] = useState({
        positioning: {
            top: null,
            left: null
        },
        color: null
    });

    const loginStyling = {
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
                    validationSchema={loginSchema}
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
                                    style={{color: loginEmailState.color}}
                                />
                                <label
                                    htmlFor="email"
                                    className={authStyling.inputLabel}
                                    style={{
                                        ...loginEmailState.positioning,
                                        color: loginEmailState.color
                                    }}
                                    >E-Mail</label>
                                <Field
                                    className={authStyling.input}
                                    type="email"
                                    name="email"
                                    id="email"
                                    style={{border:'1px solid' + loginEmailState.color}}
                                    onFocus={() => {
                                        setLoginEmailState(
                                            produce(loginEmailState, draft => {
                                                draft.color = loginStyling.validatingColor
                                                draft.positioning = {
                                                    ...loginStyling.positioning
                                                }
                                            })
                                        )
                                    }}
                                    onBlur={(e) => {
                                        if (values.email && !errors.email) {
                                            setLoginEmailState(
                                                produce(loginEmailState, draft => {
                                                    draft.color = loginStyling.validColor
                                                })
                                            )
                                        } else if (values.email && errors.email ) {
                                            setLoginEmailState(
                                                produce(loginEmailState, draft => {
                                                    draft.color = loginStyling.invalidColor
                                                    draft.positioning = {...loginStyling.positioning}
                                                })
                                            )
                                        } else if (errors.email && !values.email) {
                                            setLoginEmailState(
                                                produce(loginEmailState, draft => {
                                                    draft.color = loginStyling.invalidColor
                                                    draft.positioning = {
                                                        top: null,
                                                        left: null
                                                    }
                                                })
                                            )
                                        } else {
                                            setLoginEmailState(
                                                produce(loginEmailState, draft => {
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
                                    style={{color: loginPasswordState.color}}
                                />
                                <label
                                    htmlFor="password"
                                    className={authStyling.inputLabel}
                                    style={{
                                        ...loginPasswordState.positioning,
                                        color: loginPasswordState.color
                                    }}
                                    >Password</label>
                                <Field
                                    className={authStyling.input}
                                    type="password"
                                    name="password"
                                    id="password"
                                    style={{border: '1px solid' + loginPasswordState.color}}
                                    onFocus={() => {
                                        setLoginPasswordState(
                                            produce(loginPasswordState, draft => {
                                                draft.color = loginStyling.validatingColor
                                                draft.positioning = {
                                                    ...loginStyling.positioning
                                                }
                                            })
                                        )
                                    }}
                                    onBlur={(e) => {
                                        if (values.password && !errors.password) {
                                            setLoginPasswordState(
                                                produce(loginPasswordState, draft => {
                                                    draft.color = loginStyling.validColor
                                                })
                                            )
                                        } else if (values.password && errors.password ) {
                                            setLoginPasswordState(
                                                produce(loginPasswordState, draft => {
                                                    draft.color = loginStyling.invalidColor
                                                    draft.positioning = {...loginStyling.positioning}
                                                })
                                            )
                                        } else if (errors.password && !values.password) {
                                            setLoginPasswordState(
                                                produce(loginPasswordState, draft => {
                                                    draft.color = loginStyling.invalidColor
                                                    draft.positioning = {
                                                        top: null,
                                                        left: null
                                                    }
                                                })
                                            )
                                        } else {
                                            setLoginPasswordState(
                                                produce(loginPasswordState, draft => {
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
                                    Log In
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>

        </React.Fragment>
    );
}

export default RegistrationForm;
