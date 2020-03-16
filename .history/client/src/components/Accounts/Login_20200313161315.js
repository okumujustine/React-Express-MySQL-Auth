import React, { Component } from 'react'
import { connect } from 'react-redux'
import {login} from '../Redux/Action/authAction'

class Login extends Component {
    state = {
        contact: "",
        password: "",
        msg:null
      }
    
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        // const {contact, password} = this.state
        this.props.login(contact,password)
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

const mapStateToProps = state => ({
    isAuthenticated:state.authReducer.isAuthenticated,
    error: state.error
})
export default connect(mapStateToProps,{login})(Login)
