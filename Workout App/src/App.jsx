import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import LogExercise from './pages/LogExercise'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/log" element={<LogExercise />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
