import React from 'react'
import { Link } from 'react-router-dom'

const Control = (props) => {

    const desc = () => {

        this.setState(prevState => {
          this.state.beers.sort((a, b) => (b.id - a.id))
      });
    }

    return (
        <div className="App">
            <ul>
                <li onClick={this.desc}><Link to="/beers"> Beers! </Link></li>
                <li><Link to="/add"> add beer </Link></li>
            </ul>
        </div>
    )
}

export default Control
