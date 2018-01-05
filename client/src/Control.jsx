import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


const Control = (props) => {
    return (
        <Router>
            <div className="App">
                  <ul>
                    <li><Link to="/beers">Beers!</Link></li>
                    <li><Link to="/new">add beer</Link></li>
                  </ul>
            </div>
        </Router>
    )
}

export default Control
