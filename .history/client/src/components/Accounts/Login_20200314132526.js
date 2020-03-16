import React, { Component } from 'react'
import { connect } from 'react-redux'
import {login} from '../Redux/Action/authAction'
import history from '../config/PrivateRoute/history'
import {
    Container,
    Card
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
                <Container>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                        <Card>
                            <form onSubmit={this.handleSubmit}>
                                <label for="contact">Contact</label>
                                <div class="form-group">
                                    <input
                                        id="contact"
                                        placeholder="user contact..."
                                        name = 'user_contact'
                                        type="number" 
                                        className="form-control"
                                        value={this.state.user_contact}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input
                                        id="password"
                                        type="password" 
                                        className="form-control"
                                        placeholder="user password..."
                                        name = 'user_password'
                                        value={this.state.user_password}
                                        onChange={this.handleChange}
                                        />
                                </div>
                                <button type="submit">Login</button>
                            </form>
                        </Card>
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
