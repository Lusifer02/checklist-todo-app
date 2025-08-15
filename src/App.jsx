import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import ProtectedRoute from './Components/ProtectedRoute'
import LandingPage from './Pages/LandingPage'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App