import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="collapse navbar-collapse">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="/">My Contact</a>
                    </div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/add-contact" class="nav-link">Add Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact-list" class="nav-link" href="/contact-list">Contact List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
