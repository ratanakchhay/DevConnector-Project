import React, { Fragment } from 'react'
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
  const [styleName, setStyleName] = React.useState("container")
  
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Navbar />
            <Routes>
              <Route path = "/" element = {<Landing />} />
              <Route path = "/login" element = {<section className = 'container'><Alert /><Login /></section>} />
              <Route path = "/register" element = {<section className = 'container'><Alert /><Register /></section>} />
            </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
