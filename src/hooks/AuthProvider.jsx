import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext } from "react";
import { auth } from "./firebase";
import { useState } from "react";
import { useEffect } from "react";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false)
        });

        return () => unsubscribe();
    }, []);

    const signUp = (name, email, password, url) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('userCredentials', userCredential);

                const user = userCredential.user;

                setCurrentUser(user)
                setLoading(false)
                // updateProfile(auth.currentUser, {
                //     displayName: name, photoURL: url
                // }).then(() => {
                //     console.log('name and url updated');
                // }).catch((error) => {
                //     console.log(error);
                // });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
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
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;

                setCurrentUser(user)
                setLoading(false)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
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
        signUp,
        googleSignUp,
        logIn,
        logOut,
        loading
    }

    console.log(currentUser);

    return (
        <AuthContext.Provider value={obj}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider