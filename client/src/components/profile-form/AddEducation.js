import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../actions/profile'
import { Link, useNavigate } from 'react-router-dom'

function AddEducation ({ addEducation, error }) {
    const [formData, setFormData] = React.useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const [toDateDisabled, toggleDisabled] = React.useState(false)
    
    const navigate = useNavigate()

    const handleSubmit = (form) => {
        const school = form.get('school') || ""
        const degree = form.get('degree') || ""
        const fieldofstudy = form.get('fieldofstudy') || ""
        const from = form.get('from') || ""
        const current = toDateDisabled
        const to = form.get('to') || ""
        const description = form.get('description') || ""

        console.log({ school, degree, fieldofstudy, from, to, current, description })

        setFormData({ school, degree, fieldofstudy, from, to, current, description })
        addEducation({ school, degree, fieldofstudy, from, to, current, description })
        
        if (!error && school !== "" && degree !== "" && fieldofstudy !== "" && from !== "") {
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
            <h1 className="large text-primary">Add Your Education</h1>
            <p className="lead">
                <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc that
                you have attended
            </p>

            <small>* = required field</small>

            <form className="form" action = {handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* School or Bootcamp"
                        name="school"
                        value = {formData.school}
                        onChange = {e => handleChange(e)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Degree or Certificate"
                        name="degree"
                        value = {formData.degree}
                        onChange = {e => handleChange(e)}
                    />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="* Field Of Study" name="fieldofstudy" value = {formData.fieldofstudy} onChange = {e => handleChange(e)}/>
                </div>

                <div className="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" value = {formData.from} onChange = {e => handleChange(e)}/>
                </div>

                <div className="form-group">
                    <p>
                        <input 
                            type="checkbox"
                            name="current"
                            value=""
                            onChange = {
                                e => toggleDisabled(!toDateDisabled)
                            }
                        /> Current School or Bootcamp
                    </p>
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
                        placeholder="Program Description"
                        value = {formData.description} 
                        onChange = {e => handleChange(e)}
                    ></textarea>
                </div>

                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    error: state.profile.error
}
)
export default connect(mapStateToProps, { addEducation })(AddEducation)
