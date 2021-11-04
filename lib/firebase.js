import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAsq2pml7zERPrukQto37Iwz4HY2k_MB08",

  authDomain: "lodnisroub-a7a71.firebaseapp.com",

  projectId: "lodnisroub-a7a71",

  storageBucket: "lodnisroub-a7a71.appspot.com",

  messagingSenderId: "856011368550",

  appId: "1:856011368550:web:99c73e75279257bfbe65a7",

  measurementId: "G-4WV2Z2RNLS",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const analytics = getAnalytics(app);
