import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, logInUsingEmailPassword } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/home';

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    // login using email and password
    const handleLogin = (event) => {
        event.preventDefault();
        logInUsingEmailPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setError('');
                history.push(redirectUri);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    // login using google
    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result) => {
            history.push(redirectUri);
        });
    };
    return (
        <div className="container pt-sm-5 mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                    <div className="card shadow-lg">
                        <div className="border-top border-3 border-primary rounded-top "></div>
                        <FontAwesomeIcon
                            className="text-primary my-3 mx-auto display-1"
                            icon={faUserCircle}
                        />

                        <div className="card-body px-5">
                            <form onSubmit={handleLogin}>
                                {error ? (
                                    <p className="text-danger">{error}</p>
                                ) : (
                                    ''
                                )}
                                <div className="mb-3">
                                    <input
                                        onBlur={handleEmail}
                                        type="email"
                                        className="form-control py-2"
                                        placeholder="Your email"
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        onBlur={handlePassword}
                                        type="password"
                                        className="form-control py-2"
                                        placeholder="Password"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary d-block col-5 mx-auto my-3"
                                >
                                    Login
                                </button>
                                <p className="text-center">-OR-</p>
                                <div className="social-login">
                                    <button
                                        onClick={handleGoogleLogin}
                                        className="btn d-block btn-danger w-100"
                                        type="button"
                                    >
                                        <FontAwesomeIcon
                                            className="me-2"
                                            icon={faGooglePlus}
                                        />
                                        <span>Sign in using Google+</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-center py-3">
                            <Link to="/register">
                                Don't have an account yet?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
