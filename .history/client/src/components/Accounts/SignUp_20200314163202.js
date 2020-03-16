import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {login} from '../Redux/Action/authAction'
import {
    Container,
    Form
} from 'react-bootstrap'

class SignUp extends Component {
    state = {
        user_name:"",
        user_contact:"",
        user_email:"",
        user_password:"",
        user_role:"",
        user_confirm_password:"",
        msg:null
      }

    
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        const {user_name,user_contact,user_email,user_password,user_role} = this.state
        const user = {
            user_name,
            user_contact,
            user_email,
            user_password,
            user_role

        }
        this.props.login(user)
    }

    render() {
        const { msg } = this.props.errorReducer
        const errorDisplay = (
            <Fragment>
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>{msg}</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </Fragment>
        )
        return (
            <Container>
                <div className="row align-items-center h-100">
                    <div className="col-md-6 offset-md-3">
                        <h5 className="text-center">Join Here</h5>
                        {msg && errorDisplay}
                        <form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicContact">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text"
                                    placeholder="user name..."
                                    name = 'user_name'
                                    value={this.state.user_name}
                                    onChange={this.handleChange}
                                    />
                            </Form.Group>
                            <Form.Group controlId="formBasicContact">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="number"
                                    placeholder="user contact..."
                                    name = 'user_contact'
                                    value={this.state.user_contact}
                                    onChange={this.handleChange}
                                    />
                            </Form.Group>
                            <Form.Group controlId="formBasicContact">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email"
                                    placeholder="user email..."
                                    name = 'user_email'
                                    value={this.state.user_email}
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
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Comfirm Password</Form.Label>
                                <Form.Control type="password"
                                    placeholder="user confirm password..."
                                    name = 'user_confirm_password'
                                    value={this.state.user_confirm_password}
                                    onChange={this.handleChange}
                                    />
                            </Form.Group>
                            <button type="submit" className="btn  btn-secondary active btn-block">Sign Up</button>
                        </form>
                    </div>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated:state.authReducer.isAuthenticated,
    errorReducer: state.errorReducer
})
export default connect(mapStateToProps,{login})(SignUp)


