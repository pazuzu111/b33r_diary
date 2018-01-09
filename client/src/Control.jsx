import React from 'react'
import { Link } from 'react-router-dom'

const Control = (props) => {
    return (
        <div className="App">
            <ul>
                <li><Link to="/beers"> Beers! </Link></li>
                <li><Link to="/add"> add beer </Link></li>
            </ul>
        </div>
    )
}

export default Control
