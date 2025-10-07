import React from 'react'
import { Link } from 'react-router-dom'

function NotFound () {
    return (
        <section className = "dark-overlay">
            <div className = 'landing-inner'>
                <h1 className = 'x-large'>404 Page not Found</h1>
                <div className = 'buttons'>
                    <Link to='/dashboard' className = 'btn btn-primary'>Back</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound
