import { useState } from 'react';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { useEffect } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signUpUsingEmailPassword = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const logInUsingEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // observe whether user auth state change or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, []);

    return {
        signUpUsingEmailPassword,
        logInUsingEmailPassword,
        signInUsingGoogle,
        logOut,
        user,
        error,
        isLoading
    };
};

export default useFirebase;