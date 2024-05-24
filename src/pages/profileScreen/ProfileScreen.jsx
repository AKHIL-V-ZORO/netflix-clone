import React from 'react'
import NavBar from '../../components/nav/NavBar'
import profileIcon from '../../assets/profile-icon.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slice/userSlice'
import './ProfileScreen.css'
//import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import {  UserAuth } from '../../auth/AuthProvider'
import Plan from '../../components/plan/Plan'

const ProfileScreen = () => {
    const user = useSelector(selectUser)
    const {logOut}=UserAuth()
    const logOff=()=>{
    //signOut(auth)----->>>we can use this one also
    logOut(auth)

    }
    return (
        <> 
        <NavBar />
        <div className='profileScreen'>
            <div className="profileScreen--body">
                <h1>Edit profile</h1>
                <div className="profileScreen--info">
                    <img src={profileIcon} alt="profle icon" />
                    <div className="profileScreen-details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen--plans">
                            <h3>plans</h3>
                            <Plan/>
                            <button onClick={logOff} className="profileScreen--signOut">Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default ProfileScreen
