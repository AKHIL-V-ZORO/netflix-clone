import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../../auth/AuthProvider'


const ProtectedRoute = ({ children }) => {

    const { currentUser } =UserAuth()
    
    if (!currentUser) {
        return <Navigate to='/' />
    }
    else {
        return children
    }
}

export default ProtectedRoute
