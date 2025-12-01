import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import NotFound from './pages/404'
import PrivRoute from './component/PrivRoute'

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={(
          <PrivRoute>
            <HomePage />
          </PrivRoute>
        )}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default App