import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signUpUsingEmailPassword } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    // handle signup functionality
    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const signUp = (event) => {
        event.preventDefault();
        signUpUsingEmailPassword(name, email, password)
            .then((result) => {
                setError('');
                alert('Registration is successfull and you are loggedin!');
                history.push('/home');
            })
            .catch((error) => {
                setError(error.message);
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
                            {error ? (
                                <p className="text-danger">{error}</p>
                            ) : (
                                ''
                            )}
                            <form onSubmit={signUp}>
                                <div className="mb-3">
                                    <input
                                        onBlur={handleName}
                                        type="text"
                                        className="form-control py-2"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        onBlur={handleEmail}
                                        type="email"
                                        className="form-control py-2"
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        onBlur={handlePassword}
                                        type="password"
                                        className="form-control py-2"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary d-block col-5 mx-auto my-3"
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                        <div className="card-footer text-center py-3">
                            <Link to="/login">Already have an account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
