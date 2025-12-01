import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivRoute = ({ children }) => {
  const saved = localStorage.getItem('user')
  const user = saved ? JSON.parse(saved) : null

  return user?.token ? children : <Navigate to="/login" />
}

export default PrivRoute