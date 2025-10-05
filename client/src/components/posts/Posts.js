import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/post'
import PostItem from './PostItem'
import Spinner from '../layout/Spinner'

function Posts ({ getPosts, post: { posts, loading }, auth: { isAuthenticated } }) {
    React.useEffect(() => {
        if (isAuthenticated) {
            getPosts()
        }
    }, [getPosts, isAuthenticated])

    if (!isAuthenticated) {
        return <Navigate to = '/dashboard' />
    }

    return (
        loading ? 
            <Spinner /> : 
            <>
                <h1 className='large text-primary'>Posts</h1>
                <p className='lead'>
                    <i className='fas fa-user'></i> Welcome to the community
                </p>
                <div className='posts'>
                    {posts.map(post => (
                        <PostItem key = {post._id} post = {post} />
                    ))}
                </div>
            </>
    )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.post,
    auth: state.auth
})

export default connect(mapStateToProps, { getPosts })(Posts)
