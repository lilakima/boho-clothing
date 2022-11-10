import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAykpwzJyT6uAF-ZV60Gz-QcPiCHKgJqL0",
    authDomain: "boho-clothing-db.firebaseapp.com",
    projectId: "boho-clothing-db",
    storageBucket: "boho-clothing-db.appspot.com",
    messagingSenderId: "391270818076",
    appId: "1:391270818076:web:edfecd6c5c5ecec21e5ad9"
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapShot = await getDoc(userDocRef)
}