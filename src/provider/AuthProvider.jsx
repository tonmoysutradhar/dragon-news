import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.conjig';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user);
    

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userlogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=> {
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        userlogin,
        logOut,
    }

    useEffect (()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return ()=> {
            unsubscribe ();
        }
    },[])


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;