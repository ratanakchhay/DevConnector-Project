import React from 'react'
import PropTypes from 'prop-types'

function ProfileTop ({ profile : { status, company, location, website, social, user: { name, avatar } }}) {
    return (
        <div className="profile-top bg-primary p-2">
            <img
                className="round-img my-1"
                src= {avatar}
                alt=""
            />

            <h1 className="large">{name}</h1>
            <p className="lead">{status} {company && <span>@ {company}</span>}</p>
            <p>{location && <span>{location}</span>}</p>

            <div className="icons my-1">
                {
                    website && (
                        <a href={`https://www.${website}`} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-globe fa-2x"></i>
                        </a>
                    )
                }

                {
                    social && social.twitter && (
                        <a href={`https://www.${social.twitter}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                    )
                }

                {
                    social && social.facebook && (
                        <a href={`https://www.${social.facebook}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                    )
                }

                {
                    social && social.linkedin && (
                        <a href={`https://www.${social.linkedin}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    )
                }

                {
                    social && social.youtube && (
                        <a href={`https://www.${social.youtube}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube fa-2x"></i>
                        </a>
                    )
                }

                {
                    social && social.instagram && (
                        <a href={`https://www.${social.instagram}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    )
                }     
            </div>
        </div>
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

export default ProfileTop
