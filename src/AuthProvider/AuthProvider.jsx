import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = () => {
    // provider google and github
const googleProvider = new GoogleAuthProvider();

// signin with google
const createAccountWithGoogle =()=>{
    return signInWithPopup(auth, googleProvider)
}

    const authInfo ={
        createAccountWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;