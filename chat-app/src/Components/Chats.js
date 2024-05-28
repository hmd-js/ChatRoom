 import React , {useState , useEffect , useContext} from 'react'
import styles from "./Chats.module.css" 
import Navbar from './Navbar'
import { auth } from '../firebase'
import {  useNavigate } from 'react-router-dom'
import {ChatEngine} from "react-chat-engine"
import axios from 'axios'
import {AuthContext} from "../contexts/AuthContextProvider"


export default function Chats() {

    const navigate = useNavigate()
    const[loading , setLoading] = useState(true)
    const user = useContext (AuthContext)

    useEffect(()=>{
        if (!user){
            navigate("/")
            return;
        }
        axios.get("https://api.chatengine.io/users/me" , {
            headers:{
                "project-id":"a0a81fcc-4a14-4aff-a694-8072cd6ab533",
                "user-name" : user.email,
                "user-secret" : user.uid
            }
        })
        .then(()=>{
            setLoading(false)
        })

        .catch(()=>{
            let formdata = new FormData()
            formdata.append("email" , user.email)
            formdata.append("username" , user.email)
            formdata.append("secret" , user.uid)
            getFile(user.photoURL)
                .then(avatar=>{
                    formdata.append("avatar" , avatar , avatar.name)
                    axios.post("https://api.chatengine.io/users/", formdata , {
                        headers: {
                            "private-key" : "7ae9170e-fabf-4ac2-b7c7-1c3cba9ee657"
                        }
                    })
                    .then(()=> setLoading(false))
                    .catch(error => console.log(error) )
                })
        })

    },[user , navigate])

    /////////////////////////////////////////
    const getFile= async (url)=>{
        const response = await fetch(url) ; 
        const data = await response.blob();
        return new File([data], "userPhoto.jpg" , {type: "image/jpeg"})

    }

    /////////////////////////////////////////

    const logoutHandeler= async ()=>{
        await auth.signOut();
        navigate("/")
    }

     if (!user || loading) return "Loading..."
//////////////////////////////////////////////////////////////
  return (
    <div className={styles.container}>
        <Navbar logoutHandeler= {logoutHandeler} />
        <ChatEngine
                height ="calc(100vh - 50px)"
                projectID= "a0a81fcc-4a14-4aff-a694-8072cd6ab533"
                userName= {user.email}
                userSecret= {user.uid}
        />
     </div>
  )
}
