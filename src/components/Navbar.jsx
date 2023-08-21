import React from 'react'

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="@">Navbar</a>
                    <span className="badge badge-fill bg-secondary">{props.totalCounter}</span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar