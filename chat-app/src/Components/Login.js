import React from 'react';
import google from "../google.svg";
import styles from "./Login.module.css";
import firebase from 'firebase/compat/app';
import {auth} from "../firebase";


export default function Login() {
  return (
    <div className={styles.loginPage}>
        <div className={styles.loginCard}>
            <h2>Welcome to Hamgram</h2> 

            <div className={styles.button}
            onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >
                <img  src={google} alt='google'/>Sing in with Google
            </div>
        </div>
    </div>
  )
}
