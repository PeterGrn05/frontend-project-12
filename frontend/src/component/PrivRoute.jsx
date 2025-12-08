import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user)

  if (!user || !user.token) {
    return <Navigate to="/login" />
  }

  return children
}

export default PrivRoute