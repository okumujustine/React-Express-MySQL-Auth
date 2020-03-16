import React, { Component } from 'react'
import { connect } from 'react-redux'
import {login} from '../Redux/Action/authAction'

class Login extends Component {
    state = {
        user_contact: "",
        user_password: "",
        msg:null
      }
    
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        const {user_contact, user_password} = this.state
        const user = {
            user_contact,
            user_password
        }
        this.props.login(user)
    }

    render() {
        const { msg } = this.props.error

        return (
            <div>
                <h2>{msg}</h2>
                { msg && (<h6>msg</h6>)}
                <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="user contact..."
                    name = 'user_contact'
                    value={this.state.user_contact}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="user password..."
                    name = 'user_password'
                    value={this.state.user_password}
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
    error: state.errorReducer
})
export default connect(mapStateToProps,{login})(Login)
