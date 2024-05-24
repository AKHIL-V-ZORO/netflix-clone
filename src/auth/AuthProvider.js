import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase/firebase'
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, sendPasswordResetEmail, onAuthStateChanged
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { setDoc, doc } from 'firebase/firestore'

const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState(null)
    const [isloading, setIsloading] = useState(true)
    const [signUpErrorMessage, setSignUpErrorMessage] = useState('')
    const [signInErrorMessage, setSignInErrorMessage] = useState('')

    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, (currentuser) => {
            setCurrentUser(currentuser)
            setIsloading(false)
        })
        return () => unSuscribe()
    }, [])

    const signUp = async (email, password) => {

        try {
            await createUserWithEmailAndPassword(auth, email, password).then((response) => {
                setDoc(
                    doc(db, 'users', email),
                    { savedShows: [] }
                )
                navigate('/signin')
            })

        } catch (error) {
            console.log("errrror",error.code)
           errorCodeManagerForSignUp(error.code)
        }
    }

    const signIn = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/account')
        }
        catch (error) {
            console.log("signinWithEmailAndPassword--error", error)
            errorCodeManagerForSignIN(error.code)

        }
    }

    const logOut = async () => {
        try { await signOut(auth) }
        catch (error) { console.log("error in signout", error) }
    }

    const resetPassword = async (email) => {
        try { await sendPasswordResetEmail(auth, email) }
        catch (error) { console.log("error in reseting password", error) }
    }


    function errorCodeManagerForSignUp(errorCode) {
        switch (errorCode) {
            case 'auth/invalid-email':
                setSignUpErrorMessage('Invalid email address');

                break;

            case 'auth/email-already-in-use':
                setSignUpErrorMessage('Email already in use');
                break;

            case 'auth/weak-password':
                setSignUpErrorMessage('Password is too weak');
                break;

            default:
                console.error('Unhandled error:', errorCode);
                setSignUpErrorMessage('An error occurred');
                break;
        }
    }

    function errorCodeManagerForSignIN(errorCode) {
        switch (errorCode) {
            case 'auth/invalid-email':
                setSignInErrorMessage('Invalid email address');

                break;

            case 'auth/email-already-in-use':
                setSignInErrorMessage('Email already in use');
                break;

            case 'auth/weak-password':
                setSignInErrorMessage('Password is too weak');
                break;

            default:
                console.error('Unhandled error:', errorCode);
                setSignInErrorMessage('An error occurred');
                break;
        }
    }

    const value = {
        signUp: signUp,
        signIn: signIn,
        logOut: logOut,
        resetPassword: resetPassword,
        signUpErrorMessage: signUpErrorMessage,
        signInErrorMessage: signInErrorMessage,
        currentUser: currentUser,
    };
    console.log()
    return (
        <AuthContext.Provider value={value}>
            {!isloading ? children : null}
        </AuthContext.Provider>
    )


}
export function UserAuth() {
    return useContext(AuthContext)
}
export { AuthProvider }