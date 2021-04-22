import React from 'react'

import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className="container is-fluid">
                <div>
                    <img src='../../images/logo.png' />
                </div>
                <div>
                    <h1>Welcome to the Skin Specialist Centre</h1>
                    <Link to={'/Register'}>
                    <img src="../../images/footer-logo.png" />
                    <p>Please click here to fill in your registration form</p>
                    </Link>
            </div>
        </div>
        </>
    )
}

export default Home