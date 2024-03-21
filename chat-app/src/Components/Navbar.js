import React from 'react'
import styles from "./Navbar.module.css"

const Navbar=({logoutHandeler})=> {
  return (
    <div className={styles.container} >
        <div className={styles.name}>
            Hamgram
        </div>
        <div className={styles.logout} onClick={logoutHandeler} >
            LogOut
        </div>
    </div>
  )
}
export default Navbar
