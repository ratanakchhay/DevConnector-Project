import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getProfiles } from '../../actions/profile'
import ProfileItem from './ProfileItem'

function Profiles ({ getProfiles, profile }) {
    React.useEffect(() => {
        getProfiles()
    }, [getProfiles])
    
    return (
        <>
        {
            profile.loading ? 
            <Spinner /> : 
            <>
                <h1 className = 'large text-primary'>Developers</h1>
                <p className = 'lead'>
                    <i className='fab fa-connectdevelop'></i> Browse and Connect with developers
                </p>
                <div className = 'profiles'>
                    {profile.profiles.length > 0 ? (
                        profile.profiles.map(profile => (
                            <ProfileItem key = {profile._id} profile = {profile}/>
                        ))
                    ) : <h4>No Profile is Found</h4>}
                </div>
            </>
        } 
        </>
    )
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Profiles)

/*
                profile.loading ? 
                    <Spinner /> : 
                    <>
                        <h1 className = 'large text-primary'>Developers</h1>
                        <p className = 'lead'>
                            <i className='fab fa-connectdevelop'></i> Browse and Connect with developers
                        </p>
                        <div className = 'profiles'>
                            {profile.profiles.length > 0 ? (
                                profile.profiles.map(profile => {
                                    <ProfileItem key = {profile._id} profile = {profile}/>
                                })
                            ) : <h4>No Profile is Found</h4>}
                        </div>
                    </>
            } */
