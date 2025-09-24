import React from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import { Navigate, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'

function Dashboard ({ isAuthenticated, loading, getCurrentProfile, profile, auth }) {
    React.useEffect(() => {
        getCurrentProfile()
    }, [])

    if (!isAuthenticated && !loading) {
        return <Navigate to = '/login' />
    }
    
    return (profile.loading && profile.profile === null) ? 
                <Spinner /> : 
                <>
                    <h1 className="large text-primary">Dashboard</h1>
                    <p className="lead"><i className="fas fa-user"></i> Welcome, { auth.user && auth.user.name }!</p>
                    { profile.profile !== null ? 
                        <>has</> : 
                        <>
                            <p>You have not yet setup a profile, please add some info.</p>
                            <Link to = '/create-profile' className = 'btn btn-primary my-1'>
                                Create Profile
                            </Link>
                        </>
                    }
                </>
}

Dashboard.propTypes = {
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.bool,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    loading: state.auth.loading,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
