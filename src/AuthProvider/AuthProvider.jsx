import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    // provider google and github
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

// signin with google
const createAccountWithGoogle =()=>{
    return signInWithPopup(auth, googleProvider)
}

// signIn with gitHub
const createAccountWithGitHub=()=>{
    return signInWithPopup(auth, gitHubProvider)
}

// state change 
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
    })
    return ()=>{
        unSubscribe()
    }
},[])

    const authInfo ={
        user,
        createAccountWithGoogle,
        createAccountWithGitHub,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children: PropTypes.node
}
export default AuthProvider;