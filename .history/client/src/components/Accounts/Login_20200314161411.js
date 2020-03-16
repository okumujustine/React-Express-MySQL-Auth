import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {login} from '../Redux/Action/authAction'
import {
    Container,
    Form,
    Alert
} from 'react-bootstrap'

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
        const { msg } = this.props.errorReducer
        const errorDisplay = (
            <Fragment>
                <p>{msg}</p>
            </Fragment>
        )
        return (
            <Container>
                <div className="row align-items-center h-100">
                    <div className="col-md-6 offset-md-3">
                        <h5 className="text-center">Login</h5>
                        <div className="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>
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
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated:state.authReducer.isAuthenticated,
    errorReducer: state.errorReducer
})
export default connect(mapStateToProps,{login})(Login)
