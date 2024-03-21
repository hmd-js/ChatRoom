import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


  export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyAL1GtgmAcHqCqwsoh8IF4rI6JnjxYwG9M",
    authDomain: "hamgram.firebaseapp.com",
    projectId: "hamgram",
    storageBucket: "hamgram.appspot.com",
    messagingSenderId: "852366970177",
    appId: "1:852366970177:web:aacc3998a414bbe3b765c0"
  }).auth();
 