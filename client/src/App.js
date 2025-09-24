import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Dashboard from './components/dashboard/Dashboard'
import CreateProfile from './components/profile-form/CreateProfile'

// Redux imports
import { Provider } from 'react-redux'
import store from './store'
import Alert from './components/layout/Alert'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  React.useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Navbar />
            <Routes>
              <Route path = "/" element = {<Landing />} />
              <Route path = "/login" element = {<section className = 'container'><Alert /><Login /></section>} />
              <Route path = "/register" element = {<section className = 'container'><Alert /><Register /></section>} />
              <Route path = '/dashboard' element = {<section className='container'><Dashboard /></section>} />
              <Route path = "/create-profile" element = {<CreateProfile />} />
            </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
