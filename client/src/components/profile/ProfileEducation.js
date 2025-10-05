import React from 'react'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

function ProfileEducation ({ education: { school, degree, fieldofstudy, current, to, from, description } }) {
    return (
        <div>
            <h3 className = 'text-dark'>{school}</h3>
            <p>{dayjs(from).format('YYYY/MM/DD')} - {to ? dayjs(to).format('YYYY/MM/DD') : <>Present</>}</p> 
            <p><strong>Degree: </strong>{degree}</p>
            <p><strong>Field of Study: </strong>{fieldofstudy}</p>
            {description ? <p><strong>Description: </strong>{description}</p> : <></>}
        </div>
    )
}

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired,
}

export default ProfileEducation