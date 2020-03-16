
import React, {Component, Fragment} from 'react'
import Chat from '../Chat/Chat'
import Join from '../Join/Join'
import Login from '../Accounts/Login'
import Home from '../Home/Home'
import {
    Navbar,
    Form,
    Nav,
    Button,
    Container
} from 'react-bootstrap'

import { connect } from 'react-redux'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import PrivateRoute from '../config/PrivateRoute/PrivateRoute'

class MainNavigationBar extends Component {
    render(){
        const { isAuthenticated, user } = this.props.authReducer

        const beforeAuthLinks = (
            <Fragment>
                <Nav.Link to="/login">Login</Nav.Link>
            </Fragment>
        )

        const afterAuthLinks = (
            <Fragment>
                <Nav.Link to="/Home">Home</Nav.Link>
                <Nav.Link to="">{user ? `welcome ${user.user_name}`:""}</Nav.Link>
                <Nav.Link to="/Join">Logout</Nav.Link>
            </Fragment>
        )

        return (
            <div>
                <Router>
                    <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                        <Navbar.Brand href="#home">Airbnb</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                {isAuthenticated ? afterAuthLinks : beforeAuthLinks}
                            </Nav>
                        </Navbar.Collapse>
                        </Container>
                    </Navbar>

                        <Switch>
                        <PrivateRoute exact path = "/" component={Home} />
                        <Route exact path = "/login" component={Login} />
                        <PrivateRoute exact path="/Join" component={Join} />
                        <PrivateRoute exact path="/Chat" component={Chat} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authReducer:state.authReducer
})
export default connect(mapStateToProps,null)(MainNavigationBar)
