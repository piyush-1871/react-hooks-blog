import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCVBk7HlCrQwvNZ52NWhlsDeRvborK8E1o",
  authDomain: "react-hooks-blog-8049e.firebaseapp.com",
  projectId: "react-hooks-blog-8049e",
  storageBucket: "react-hooks-blog-8049e.appspot.com",
  messagingSenderId: "670371194490",
  appId: "1:670371194490:web:452f73424c0fc46b7a7dc3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


export default firebase;