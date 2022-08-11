import {getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore} from 'firebase/firestore'
import { getStorage}from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCX8rTpQNx3Gz_2Avs9Cy6Ta_49DprIxzU",
    authDomain: "codeshop-0.firebaseapp.com",
    databaseURL: "https://codeshop-0-default-rtdb.firebaseio.com",
    projectId: "codeshop-0",
    storageBucket: "codeshop-0.appspot.com",
    messagingSenderId: "932961013793",
    appId: "1:932961013793:web:c1b8d72578cf0cc2225360",
    measurementId: "G-2N1883Y7HE"
  };
  
  // Initialize Firebase
  const app = getApps.length>0 ? getApp: initializeApp(firebaseConfig);
  
  const firestore = getFirestore(app)

  const storage = getStorage(app)

  export {app, firestore, storage};