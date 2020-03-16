import React, { Component } from 'react'
import { TextInput } from 'evergreen-ui'

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
                    value={this.state.contact}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="user password..."
                    value={this.state.password}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
