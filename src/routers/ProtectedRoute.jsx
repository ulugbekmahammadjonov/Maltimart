import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../custom-hooks/useAuth'
const ProtectedRoute = ({children}) => {
   const navigate = useNavigate()
   const {currentUser} = useAuth()
  return currentUser ? children : navigate('/login')
}

export default ProtectedRoute
