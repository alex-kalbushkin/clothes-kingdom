import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaFOXgUUE6pcXPoOcKWX3EDYTgZDQlBaU",
  authDomain: "clothes-kingdom.firebaseapp.com",
  projectId: "clothes-kingdom",
  storageBucket: "clothes-kingdom.appspot.com",
  messagingSenderId: "121500522438",
  appId: "1:121500522438:web:02a0053170dc5327ee44c7",
};

const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore(fireBaseApp);

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  }

  return userDocRef;
};
