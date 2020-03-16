
import React, {Component, Fragment} from 'react'
import Chat from '../Chat/Chat'
import Join from '../Join/Join'
import Login from '../Accounts/Login'
import Home from '../Home/Home'
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap'

import { connect } from 'react-redux'
import { Router, Route, Switch} from 'react-router-dom'
import history from '../config/PrivateRoute/history'

import PrivateRoute from '../config/PrivateRoute/PrivateRoute'

class MainNavigationBar extends Component {

    render(){
        const { isAuthenticated, user } = this.props.authReducer

        const beforeAuthLinks = (
            <Fragment>
                <Nav.Link to="/login">Login</Nav.Link>
                <Nav.Link to="/login">SignUp</Nav.Link>
            </Fragment>
        )

        const afterAuthLinks = (
            <Fragment>
                <Nav.Link to="">{user ? `welcome ${user.user_name}`:""}</Nav.Link>
                <Nav.Link to="/Logout">Chat</Nav.Link>
            </Fragment>
        )

        return (
            <div>
                <Router history={history}>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <Container>
                                <Navbar.Brand to="/Home">Airbnb</Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ml-auto">
                                        {isAuthenticated ? afterAuthLinks : beforeAuthLinks}
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>

                        <Switch>
                            <PrivateRoute exact path = "/" component={Home}/>
                            <Route path = "/login" component={Login} />
                            {(isAuthenticated!==null)?<PrivateRoute path="/Join" component={Join} />:null}
                            <PrivateRoute path="/Chat" component={Chat} />
                        </Switch>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authReducer:state.authReducer
})
export default connect(mapStateToProps,null)(MainNavigationBar)
