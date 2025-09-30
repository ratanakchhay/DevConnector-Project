import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addExperience } from '../../actions/profile'
import { Link, useNavigate } from 'react-router-dom'

function AddExperience ({ addExperience, error }) {
    const [formData, setFormData] = React.useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const [toDateDisabled, toggleDisabled] = React.useState(false)
    
    const navigate = useNavigate()

    const handleSubmit = (form) => {
        const company = form.get('company') || ""
        const title = form.get('title') || ""
        const location = form.get('location') || ""
        const from = form.get('from') || ""
        const current = toDateDisabled
        const to = form.get('to') || ""
        const description = form.get('description') || ""

        setFormData({ company, title, location, from, to, current, description })
        addExperience({ company, title, location, from, to, current, description })
        
        if (!error && title !== "" && company !== "" && from !== "") {
            navigate(-1)
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    return (
        <>
            <h1 className="large text-primary">Add An Experience</h1>
            <p className="lead">
                <i className="fas fa-code-branch"></i> Add any developer/programming
                positions that you have had in the past
            </p>
            <small>* = required field</small>
            <form className="form" action = {handleSubmit}>
                <div className="form-group">
                <input type="text" placeholder="* Job Title" name="title" value = {formData.title} onChange = {e => handleChange(e)}/>
                </div>

                <div className="form-group">
                <input type="text" placeholder="* Company" name="company" value = {formData.company} onChange = {e => handleChange(e)}/>
                </div>

                <div className="form-group">
                <input type="text" placeholder="Location" name="location" value = {formData.location} onChange = {e => handleChange(e)}/>
                </div>

                <div className="form-group">
                <h4>From Date</h4>
                <input type="date" name="from" />
                </div>

                <div className="form-group">
                <p><input type="checkbox" name="current" value="" onChange = {
                    e => toggleDisabled(!toDateDisabled)
                }/> Current Job</p>
                </div>

                <div className="form-group">
                    <h4>To Date</h4>
                    <input type="date" name="to" value = {formData.to} onChange = {e => handleChange(e)} disabled = {toDateDisabled ? 'disabled' : ''}/>
                </div>

                <div className="form-group">
                <textarea
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Job Description"
                ></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </>
    )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    error: state.profile.error
}
)
export default connect(mapStateToProps, { addExperience })(AddExperience)
