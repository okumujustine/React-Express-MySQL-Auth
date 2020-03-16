import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        contact: "",
        password: ""
      }
    
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        // this.props.userPostFetch(this.state)
        const {contact, password} = this.state
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="user contact..."
                    name = 'contact'
                    value={this.state.contact}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="user password..."
                    name = 'password'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <input type='submit'/>
            </form>
            </div>

        )
    }
}
