import React, {useContext, createContext, useState, useEffect} from 'react';
import firebaseUtil from '../utils/firebaseUtil'
import { auth, googleProvider } from '../utils/firebaseUtil';

// Create context for authentication data
const AuthContext = createContext();

// Define a function to get data from Auth context

export function useAuth() {
    return useContext(AuthContext);
}

const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setIsLoading(false);
        })
        return unsubscribe;
    }, [])

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email,password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        auth.signOut();
    }

    function loginWithGoogle() {
        googleProvider.setCustomParameters({ promt: "select_account"});
        auth.signInWithPopup(googleProvider);
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    const values = {
        signup,
        login,
        logout,
        resetPassword,
        updatePassword,
        updateEmail,
        loginWithGoogle,
        currentUser,
    }

    return <AuthContext.Provider value={values}>{!isLoading && children}</AuthContext.Provider>
};

export default AuthContextProvider;