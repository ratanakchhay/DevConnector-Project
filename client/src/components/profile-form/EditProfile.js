import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { createProfile, getCurrentProfile } from '../../actions/profile'

function EditProfile ({ createProfile, error, profile, getCurrentProfile }) {
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

    const navigate = useNavigate()

    const [displaySocialInputs, toggleSocialInputs] = React.useState(false)

    React.useEffect(() => {
        getCurrentProfile()

        setFormData({
            company: (profile.loading || !profile.profile.company) ? "" : profile.profile.company,
            website: profile.loading || !profile.profile.website ? "" : profile.profile.website,
            location: profile.loading || !profile.profile.location ? "" : profile.profile.location,
            status: profile.loading || !profile.profile.status ? "" : profile.profile.status,
            skills: profile.loading || !profile.profile.skills ? "" : profile.profile.skills.join(','),
            bio: profile.loading || !profile.profile.bio ? "" : profile.profile.bio,
            githubusername: profile.loading || !profile.profile.githubusername ? "" : profile.profile.githubusername,
            youtube: profile.loading || !profile.profile.youtube ? "" : profile.profile.youtube,
            twitter: profile.loading || !profile.profile.twitter ? "" : profile.profile.twitter,
            facebook: profile.loading || !profile.profile.facebook ? "" : profile.profile.facebook,
            linkedin: profile.loading || !profile.profile.linkedin ? "" : profile.profile.linkedin,
            instagram:profile.loading || !profile.profile.instagram ? "" : profile.profile.instagram,
        })
    }, [profile.loading, getCurrentProfile])


    const handleChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

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
        
        createProfile({ company, website, location, status, skills, bio, githubusername, youtube, twitter, facebook, linkedin, instagram }, true)

        if (error != {} && status !== "" && skills !== "") {
            navigate(-1)
        }
    }

    return (
        <>
            <h1 className="large text-primary">
                Edit Your Profile
            </h1>
            <p className="lead">
                <i className="fas fa-user"></i> Let's get some information to make your
                profile stand out
            </p>
            <small>* = required field</small>
            <form className="form" action = { handleSubmit }>
                <div className="form-group">
                <select name="status" value = {formData.status} onChange= {e => handleChange(e)}>
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
                <input type="text" placeholder="Company" name="company" value = {formData.company} onChange = {e => handleChange(e)}/>
                <small className="form-text"
                    >Could be your own company or one you work for</small
                >
                </div>
                <div className="form-group">
                <input type="text" placeholder="Website" name="website"  value = {formData.website} onChange = {e => handleChange(e)}/>
                <small className="form-text"
                    >Could be your own or a company website</small
                >
                </div>
                <div className="form-group">
                <input type="text" placeholder="Location" name="location" value = {formData.location} onChange = {e => handleChange(e)}/>
                <small className="form-text"
                    >City & state suggested (eg. Boston, MA)</small
                >
                </div>
                <div className="form-group">
                <input type="text" placeholder="* Skills" name="skills" value = {formData.skills} onChange = {e => handleChange(e)}/>
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
                    value = {formData.githubusername} 
                    onChange = {e => handleChange(e)}
                />
                <small className="form-text"
                    >If you want your latest repos and a Github link, include your
                    username</small
                >
                </div>
                <div className="form-group">
                <textarea placeholder="A short bio of yourself" name="bio" value = {formData.bio} onChange = {e => handleChange(e)}></textarea>
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
                        <input type="text" placeholder="Twitter URL" name="twitter" value = {formData.twitter} onChange = {e => handleChange(e)}/>
                        </div>

                        <div className="form-group social-input">
                        <i className="fab fa-facebook fa-2x"></i>
                        <input type="text" placeholder="Facebook URL" name="facebook" value = {formData.facebook} onChange = {e => handleChange(e)}/>
                        </div>

                        <div className="form-group social-input">
                        <i className="fab fa-youtube fa-2x"></i>
                        <input type="text" placeholder="YouTube URL" name="youtube" value = {formData.youtube} onChange = {e => handleChange(e)}/>
                        </div>

                        <div className="form-group social-input">
                        <i className="fab fa-linkedin fa-2x"></i>
                        <input type="text" placeholder="Linkedin URL" name="linkedin" value = {formData.linkedin} onChange = {e => handleChange(e)}/>
                        </div>

                        <div className="form-group social-input">
                        <i className="fab fa-instagram fa-2x"></i>
                        <input type="text" placeholder="Instagram URL" name="instagram" value = {formData.instagram} onChange = {e => handleChange(e)}/>
                        </div>    
                </>
            }

                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </>
    )
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    error: state.profile.error
})

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(EditProfile)
