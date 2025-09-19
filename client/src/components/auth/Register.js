import React from 'react'
import { Link } from 'react-router-dom'

function Register () {
  const [ formData, setFormData ] = React.useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  })

  const handleSubmit = async (form) => {
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password') 
    const password2 = form.get('password2')

    setFormData({ name, email, password, password2 })

    if (password !== password2) {
      console.error('Passwords do not match')
    } else {
      console.log('Success') 
    }
  }

  return (
    <section className = 'container'>
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
    </section>
  )
}

export default Register
