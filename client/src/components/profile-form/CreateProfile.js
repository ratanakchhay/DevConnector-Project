import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

function CreateProfile (props) {
    const [formData, setFormData] = React.useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        bio: '',
        githubusername: '',
        youtube: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        instagram: ''
    })

    const [displaySocialInputs, toggleSocialInputs] = React.useState(false)

    const handleSubmit = (form) => {
        const company = form.get('company') || ""
        const website = form.get('website') || ""
        const location = form.get('location') || ""
        const status = form.get('status') || ""
        const skills = form.get('skills') || ""
        const bio = form.get('bio') || ""
        const githubusername = form.get('githubusername') || ""
        const youtube = form.get('youtube') || ""
        const twitter = form.get('twitter') || ""
        const facebook = form.get('facebook') || ""
        const linkedin = form.get('linkedin') || ""
        const instagram = form.get('instagram') || ""

        setFormData({ company, website, location, status, skills, bio, githubusername, youtube, twitter, facebook, linkedin, instagram })
    }

    return (
        <div className = 'container'>
            <h1 className="large text-primary">
                Create Your Profile
            </h1>
            <p className="lead">
                <i className="fas fa-user"></i> Let's get some information to make your
                profile stand out
            </p>
            <small>* = required field</small>
            <form className="form" action = { handleSubmit }>
                <div className="form-group">
                <select name="status">
                    <option value="0">* Select Professional Status</option>
                    <option value="Developer">Developer</option>
                    <option value="Junior Developer">Junior Developer</option>
                    <option value="Senior Developer">Senior Developer</option>
                    <option value="Manager">Manager</option>
                    <option value="Student or Learning">Student or Learning</option>
                    <option value="Instructor">Instructor or Teacher</option>
                    <option value="Intern">Intern</option>
                    <option value="Other">Other</option>
                </select>
                <small className="form-text"
                    >Give us an idea of where you are at in your career</small
                >
                </div>
                <div className="form-group">
                <input type="text" placeholder="Company" name="company" />
                <small className="form-text"
                    >Could be your own company or one you work for</small
                >
                </div>
                <div className="form-group">
                <input type="text" placeholder="Website" name="website" />
                <small className="form-text"
                    >Could be your own or a company website</small
                >
                </div>
                <div className="form-group">
                <input type="text" placeholder="Location" name="location" />
                <small className="form-text"
                    >City & state suggested (eg. Boston, MA)</small
                >
                </div>
                <div className="form-group">
                <input type="text" placeholder="* Skills" name="skills" required />
                <small className="form-text"
                    >Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP)</small
                >
                </div>
                <div className="form-group">
                <input
                    type="text"
                    placeholder="Github Username"
                    name="githubusername"
                />
                <small className="form-text"
                    >If you want your latest repos and a Github link, include your
                    username</small
                >
                </div>
                <div className="form-group">
                <textarea placeholder="A short bio of yourself" name="bio"></textarea>
                <small className="form-text">Tell us a little about yourself</small>
                </div>

                <div className="my-2">
                <button onClick = {() => toggleSocialInputs(!displaySocialInputs)} type="button" className="btn btn-light">
                    Add Social Network Links
                </button>
                <span>Optional</span>
                </div>

                { displaySocialInputs && <>
                        <div className="form-group social-input">
                        <i className="fab fa-twitter fa-2x"></i>
                        <input type="text" placeholder="Twitter URL" name="twitter" />
                        </div>

                        <div className="form-group social-input">
                        <i className="fab fa-facebook fa-2x"></i>
                        <input type="text" placeholder="Facebook URL" name="facebook" />
                        </div>

                        <div className="form-group social-input">
                        <i className="fab fa-youtube fa-2x"></i>
                        <input type="text" placeholder="YouTube URL" name="youtube" />
                        </div>

                        <div className="form-group social-input">
                        <i className="fab fa-linkedin fa-2x"></i>
                        <input type="text" placeholder="Linkedin URL" name="linkedin" />
                        </div>

                        <div className="form-group social-input">
                        <i className="fab fa-instagram fa-2x"></i>
                        <input type="text" placeholder="Instagram URL" name="instagram" />
                        </div>    
                </>
            }

                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </div>
    )
}

CreateProfile.propTypes = {

}

export default connect()(CreateProfile)
