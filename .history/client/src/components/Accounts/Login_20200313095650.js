import React, { Component } from 'react'
import { Button, TextInput } from 'evergreen-ui'

export default class Login extends Component {
    render() {
        return (
            <div>
                <h2>Login</h2>
                <TextInput
                    name="text-input-name"
                    placeholder="Text input placeholder..."
                />
                <TextInput
                    name="text-input-name"
                    placeholder="Text input placeholder..."
                />
            </div>
        )
    }
}
