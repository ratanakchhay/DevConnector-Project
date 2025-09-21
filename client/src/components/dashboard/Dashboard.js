import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

function Dashboard ({ isAuthenticated, loading }) {
    if (!isAuthenticated && !loading) {
        return <Navigate to = '/login' />
    }
    
    return (
        <div>Dashboard</div>
    )
}

Dashboard.propTypes = {
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading
})

export default connect(mapStateToProps)(Dashboard)
