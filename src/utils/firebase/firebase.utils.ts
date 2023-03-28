import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  writeBatch,
} from 'firebase/firestore';
import { ICategory } from '../../store/categories/types';

// start firebase config block ---
const firebaseConfig = {
  apiKey: 'AIzaSyAYbGTmhpkyWF616diJAaR_uxgOmOReB6I',
  authDomain: 'clothes-kingdom-97e02.firebaseapp.com',
  projectId: 'clothes-kingdom-97e02',
  storageBucket: 'clothes-kingdom-97e02.appspot.com',
  messagingSenderId: '1008830544001',
  appId: '1:1008830544001:web:3d5b2eb0c9e35d8cbc3580',
};

const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
// end firebase config block ---

// start firestore block ---
const db = getFirestore(fireBaseApp);

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) {
    return;
  }

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log('error: ', error);
    }
  }

  return userSnapshot;
};

export const addCollectionAndDocs = async (collectionKeyName, objectsToAdd) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKeyName);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('Batch done!');
};

export const getCollectionAndDocs = async (collectionKeyName) => {
  const collectionRef = collection(db, collectionKeyName);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((categoryDocSnapshot) =>
    categoryDocSnapshot.data()
  ) as ICategory[];
};

// end firestore block ---

// start user auth block ---
export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, provider);

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) {
    return;
  }

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) {
    return;
  }

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};
// end user auth block ---
