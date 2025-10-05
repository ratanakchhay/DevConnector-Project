import React from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import { Navigate, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteAccount, getCurrentProfile } from '../../actions/profile'
import DashboardActions from './DashboardActions'
import Experience from './Experience'
import Education from './Education'

function Dashboard ({ isAuthenticated, loading, getCurrentProfile, profile, auth, deleteAccount }) {
    React.useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile])

    if (!isAuthenticated && !loading) {
        return <Navigate to = '/login' />
    }
    
    return (profile.loading && profile.profile === null) ? 
                <Spinner /> : 
                <>
                    <h1 className="large text-primary">Dashboard</h1>
                    <p className="lead"><i className="fas fa-user"></i> Welcome, { auth.user && auth.user.name }!</p>
                    <>
                        { profile.profile !== null ? 
                            <>
                                <DashboardActions />
                                {(profile.profile.experience.length !== 0) ? <Experience experience = {profile.profile.experience} /> : <></>}
                                {(profile.profile.education.length !== 0) ? <Education education = {profile.profile.education} /> : <></> } 
                            </> : 
                            <>
                                <p>You have not yet setup a profile, please add some info.</p>
                                <Link to = '/create-profile' className = 'btn btn-primary my-1'>
                                    Create Profile
                                </Link>
                            </>     
                        }
                        <div className = "my-2">
                            <button className = "btn btn-danger" onClick = {() => deleteAccount()}>
                                <i className='fas fa-user-minus'></i> Delete My Account
                            </button>
                        </div>
                    </>
                </>
}

Dashboard.propTypes = {
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.bool,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    loading: state.auth.loading,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard)
