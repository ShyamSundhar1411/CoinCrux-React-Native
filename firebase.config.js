import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4M4EtrppMgPbyGIhvN1ULc5SUeZSgy14",
  authDomain: "coincrux-12be2.firebaseapp.com",
  projectId: "coincrux-12be2",
  storageBucket: "coincrux-12be2.appspot.com",
  messagingSenderId: "87632180660",
  appId: "1:87632180660:web:095dcbb457e80d7e4daee1",
  measurementId: "G-9XB54QC4J1",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
export { auth, db };
