import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import NotFoundPage from './pages/404'

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
)

export default App