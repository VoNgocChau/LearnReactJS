import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <Link className='nav-item nav-link' to="movies">Movie</Link>
                        <Link className='nav-item nav-link' to="customers">Customer</Link>
                        <Link className='nav-item nav-link' to="rentals">Rental</Link>
                        <Link className='nav-item nav-link' to="login">Login</Link>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar