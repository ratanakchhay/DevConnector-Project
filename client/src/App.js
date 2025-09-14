import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <section>
          <Routes>
            <Route path = "/" element = {<Landing />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/register" element = {<Register />} />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  )
}

export default App
