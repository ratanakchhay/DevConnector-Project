import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

// Redux imports
import { Provider } from 'react-redux'
import store from './store'
import Alert from './components/layout/Alert'

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path = "/" element = {<Landing />} />
          </Routes>
          <section className = 'container'>
            <Alert />
            <Routes>
              <Route path = "/login" element = {<Login />} />
              <Route path = "/register" element = {<Register />} />
            </Routes>
          </section>
      </BrowserRouter>
    </Provider>
  )
}

export default App
