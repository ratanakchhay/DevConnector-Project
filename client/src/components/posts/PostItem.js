import React from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addLike, removeLike } from '../../actions/post'

function PostItem ({ post: { _id, text, name, avatar, user, likes, comments, date }, auth, addLike, removeLike }) {
    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <Link to="/dashboard">
                <img
                    className="round-img"
                    src= {avatar}
                    alt=""
                />
                <h4>{name}</h4>
                </Link>
            </div>

            <div>
                <p className="my-1">
                    {text}
                </p>

                <p className="post-date">Posted on {dayjs(date).format('MM/DD/YYYY')}</p>

                <button type="button" className="btn btn-light" onClick = {() => addLike(_id)}>
                    <i className="fas fa-thumbs-up"></i>
                    <span> {likes.length}</span>
                </button>

                <button type="button" className="btn btn-light" onClick = {() => removeLike(_id)}>
                    <i className="fas fa-thumbs-down"></i>
                </button>

                <Link to={`/post/${_id}`} className="btn btn-primary">
                    Discussion {comments.length > 0 && <span className='comment-count'> {comments.length}</span>}
                </Link>

                {!auth.loading && user === auth.user._id && (
                    <button type="button" className="btn btn-danger">
                    <i className="fas fa-times"></i>
                    </button>
                )}
            </div>
          </div>
    )
}

PostItem.propTypes = {
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { addLike, removeLike })(PostItem)
