import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import PropTypes from 'prop-types'

function Register ({ setAlert }) {
  const [ formData, setFormData ] = React.useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  })

  const handleSubmit = (form) => {
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password') 
    const password2 = form.get('password2')

    setFormData({ name, email, password, password2 })

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger')
    } else {
      console.log('Success') 
    }
  }

  return (
    <>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>

      <form className="form" action={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>

      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
}

export default connect(null, { setAlert })(Register)
