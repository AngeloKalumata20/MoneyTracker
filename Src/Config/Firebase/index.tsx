// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCA1WGMXqteLFmcZ2wCFMM8NdmwdWQ_zeY',
  authDomain: 'moneytracker-3418b.firebaseapp.com',
  projectId: 'moneytracker-3418b',
  storageBucket: 'moneytracker-3418b.appspot.com',
  messagingSenderId: '847417431626',
  appId: '1:847417431626:web:4d3e54222600f0046d38b3',
  measurementId: 'G-GGDRTN9CV5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
