import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCjYs7NIjOjX-77OBVcFi5Qdgm7FmXfZDQ",
  authDomain: "agendadeestudante.firebaseapp.com",
  databaseURL: "https://agendadeestudante-default-rtdb.firebaseio.com",
  projectId: "agendadeestudante",
  storageBucket: "agendadeestudante.appspot.com",
  messagingSenderId: "261996520449",
  appId: "1:261996520449:web:cbc0c2f295c876fca44c00"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});