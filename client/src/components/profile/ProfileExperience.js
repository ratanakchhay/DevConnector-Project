import React from 'react'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

function ProfileExperience ({ experience: { company, title, location, current, to, from, description } }) {
    return (
        <div>
            <h3 className = 'text-dark'>{company}</h3>
            <p>{dayjs(from).format('YYYY/MM/DD')} - {to ? dayjs(to).format('YYYY/MM/DD') : <>Present</>}</p> 
            <p><strong>Position: </strong>{title}</p>
            {description ? <p><strong>Description: </strong>{description}</p> : <></>}
        </div>
    )
}

ProfileExperience.propTypes = {
    experience: PropTypes.object.isRequired,
}

export default ProfileExperience
