import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { createContext } from "react";
import { auth } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

// const auth = getAuth();

const provider = new GoogleAuthProvider();

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
            if (user.email) {
                const email = user.email
                fetch("https://hyper-market-server.vercel.app/jwt", {
                    method: "POST",
                    credentials: 'include',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                }).then(res => res.json()).then(data => { })
            }

        });



        return () => unsubscribe();
    }, []);



    const signUp = (name, email, password, url) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
        })
    }

    const googleSignUp = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                setCurrentUser(user)
                setLoading(false)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage);
                // ...
            });
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        signOut(auth).then(() => {
            setCurrentUser(null)
        }).catch((error) => {
            console.log(error);
        })
    }

    const obj = {
        currentUser,
        setCurrentUser,
        setLoading,
        signUp,
        googleSignUp,
        logIn,
        logOut,
        loading,
        updateUser
    }

    return (
        <AuthContext.Provider value={obj}>
            {loading ? <Loading /> : children}
        </AuthContext.Provider>
    )
}

export default AuthProvider