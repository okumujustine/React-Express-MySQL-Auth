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
        user_email: "",
        user_password: "",
        msg:null,
        show:true
      }

    
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({show:true})
        const {user_email, user_password} = this.state
        if(!user_email || !user_password){
            alert("Fill all fields")
            return;
        }
        const user = {
            user_email,
            user_password
        }
        this.props.login(user)
    }

    closeAlert = event => {
        this.setState({show:false})
    }

    render() {
        const { msg } = this.props.errorReducer
        const errorDisplay = (
            <Fragment>
                <Alert variant="danger" onClose={this.closeAlert} dismissible> {msg} </Alert>
            </Fragment>
        )
        return (
            <Container>
                <div className="row align-items-center h-100">
                    <div className="col-md-6 offset-md-3">
                        <h5 className="text-center">Login</h5>
                        {msg && this.state.show ? errorDisplay:null}
                        <form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicContact">
                                <Form.Label>Contact</Form.Label>
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