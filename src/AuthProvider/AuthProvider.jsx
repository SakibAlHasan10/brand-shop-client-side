import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import axios from "axios";
const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [theme, setTheme] = useState(true)
    // provider google and github
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

// signin with google
const createAccountWithGoogle =()=>{
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
}

// signIn with gitHub
const createAccountWithGitHub=()=>{
    setIsLoading(true)
    return signInWithPopup(auth, gitHubProvider)
}

// create user with email
const createUserWithEmail =(email, password)=>{
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password )
}

// signin with email
const signInWithEmail =(email, password)=>{
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


// state change 
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setIsLoading(false)
        // console.log(currentUser?.email)
        if(currentUser){
            const loggedUser = {email:currentUser.email}
            axios.post('http://localhost:5000/jwt',loggedUser, {withCredentials: true} )
            .then(res=>{
                console.log(res.data)
            })
        }
    })
    return ()=>{
        unSubscribe()
    }
},[])

// signOut 
const logOut =()=>{
    setIsLoading(true)
    return signOut(auth)
}
    const authInfo ={
        user,
        isLoading,
        theme,
        setTheme,
        createAccountWithGoogle,
        createAccountWithGitHub,
        createUserWithEmail,
        signInWithEmail,
        logOut,
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