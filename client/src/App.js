import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Control from './Control';
import Beers from './Beers';


//assets
import './App.css';

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            beers: null,
            dataLoaded: false
        }
    }

    componentDidMount() {
        this.getbeers()
    }

    getbeers() {
        fetch("/beers")
        .then(res => res.json())
        .then(res => {
            this.setState({
                beers: res.beers,
                dataLoaded: true
            })
        })
    }

  render() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Control} />
                    <Route path='/beers' render={props => <Beers beers={this.state.beers} dataLoaded={this.state.dataLoaded} />} />
                    <Route exact path='/add' component={Form} />

                </Switch>
            </div>

        </Router>

    );
  }
}

