import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'


export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            brewery: '',
            style: '',
            image_url: '',
            abv: '',
            redirect: false
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch('/beers', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => {return res})
        .then(res => {this.props.getbeers()})

        setTimeout(() => {
            this.setState({ redirect: true })
        }, 500)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter Beer!</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="name"/>
                    <input type="text" name="brewery" value={this.state.brewery} onChange={this.handleChange} placeholder="brewery"/>
                    <input type="text" name="style" value={this.state.style} onChange={this.handleChange} placeholder="style"/>
                    <input type="text" name="image_url" value={this.state.image_url} onChange={this.handleChange} placeholder="image_url"/>
                    <input type="text" name="abv" value={this.state.abv} onChange={this.handleChange} placeholder="abv"/>
                    <button type="submit">SUBMIT</button>
                </form>
                 {this.state.redirect && ( <Redirect to={'/beers'}/> )}
            </div>
        )
    }
}
