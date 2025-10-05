import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Navigate, Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import PostItem from '../posts/PostItem'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'
import { connect } from 'react-redux'
import { getPost } from '../../actions/post'

function Post ({ getPost, post, auth }) {
    const { id } = useParams()

    React.useEffect(() => {
        if (auth.isAuthenticated) {
            getPost(id)
        }
    }, [getPost])

    if (!auth.isAuthenticated) {
        return <Navigate to = '/dashboard' />
    }

    return (
        (post.loading || post.post === null) ? 
            <Spinner /> :
            <>
                <Link to='/posts' className='btn'>Back To Posts</Link>
                <PostItem post = {post.post} showActions={false}/>
                <CommentForm postId = {post.post._id} />
                <div className='comments'>
                    {post.post.comments.map(comment => (
                        <CommentItem key = {comment._id} comment = {comment} postId = {post.post._id} />
                    ))}
                </div>
            </>
    )
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.post,
    auth: state.auth
})

export default connect(mapStateToProps, { getPost })(Post)
