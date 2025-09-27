// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// import { createUserWithEmailAndPassword, getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3iDs0sX0kG7IPAN2mba0ScnRrFnLhrWM",
  authDomain: "netflixconebyhaider.firebaseapp.com",
  projectId: "netflixconebyhaider",
  storageBucket: "netflixconebyhaider.firebasestorage.app",
  messagingSenderId: "421091618575",
  appId: "1:421091618575:web:74c496a6c37982b22b187a",
  measurementId: "G-PDPJB6F21W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (email, password, name) => {
    try {
        const res = await createUserWithEmailAndPassword( auth, email, password)
        const user = res.user
        await addDoc(collection(db , "users"), {
            uid : user.uid,
            name,
            authProvider : "local",
            email,
        })
        
    } catch (error) {
        console.log(error)
        alert(error.message)
        
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
        
    } catch (error) {
        console.log(error)
        alert(error.message)
    }
}

const logout = () => {
    signOut(auth)
}

export { auth, db, signup, logout, login }