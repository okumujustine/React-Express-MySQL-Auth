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

    render() {
        return (
            <div>
                <h2>Login</h2>

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
            </div>
        )
    }
}
