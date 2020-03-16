import React, { Component } from 'react'
import { connect } from 'react-redux'
import {login} from '../Redux/Action/authAction'
import history from '../config/PrivateRoute/history'
import {
    Container,
    Form
} from 'react-bootstrap'

class Login extends Component {
    componentDidMount(){
        if (this.props.isAuthenticated) {
            // redirect the user
            history.push("/")
          }
        }

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

        return (
            <div>
                <Container className="h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-md-6 offset-md-3">
                            <h5 className="text-center">Login</h5>
                            <form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicContact">
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control type="number"
                                        placeholder="user contact..."
                                        name = 'user_contact'
                                        value={this.state.user_contact}
                                        onChange={this.handleChange}
                                        />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"
                                        placeholder="user password..."
                                        name = 'user_password'
                                        value={this.state.user_password}
                                        onChange={this.handleChange}
                                        />
                                </Form.Group>
                                <button type="submit" className="btn  btn-secondary active btn-block">Login</button>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated:state.authReducer.isAuthenticated,
    error: state.errorReducer
})
export default connect(mapStateToProps,{login})(Login)
