import React, { Component } from 'react'
import { TextInput } from 'evergreen-ui'

export default class Login extends Component {
    state = {
        username: "",
        password: "",
      }
    
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
    });

    render() {
        return (
            <div>
                <h2>Login</h2>

                <TextInput
                    name="text-input-name"
                    placeholder="user contact..."
                />
                <TextInput
                    name="text-input-name"
                    placeholder="user password..."
                />
            </div>
        )
    }
}
