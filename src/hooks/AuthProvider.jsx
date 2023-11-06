import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from "react";


const AuthContext = createContext()

const auth = getAuth()

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged((user) => {
            setCurrentUser(user);
        });

        return () => unsubscribe();
    }, []);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const obj = {
        currentUser,
        signUp,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={obj}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider