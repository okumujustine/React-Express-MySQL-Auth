
import React, {Component, Fragment} from 'react'
import Chat from '../Chat/Chat'
import Join from '../Join/Join'
import Login from '../Accounts/Login'
import Home from '../Home/Home'
import SignUp from '../Accounts/SignUp'
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap'

import { connect } from 'react-redux'
import { Router, Switch, Link, Route} from 'react-router-dom'
import history from '../config/PrivateRoute/history'

import PrivateRoute from '../config/PrivateRoute/PrivateRoute'
import LoggedInProtection from '../config/PrivateRoute/LoggedInProtection'
import NoPageFound from '../NoPageFound/NoPageFound'

class MainNavigationBar extends Component {

    render(){
        const { isAuthenticated, user } = this.props.authReducer

        const beforeAuthLinks = (
            <Fragment>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="nav-link">SignUp</Link>
            </Fragment>
        )

        const afterAuthLinks = (
            <Fragment>
                <Nav.Link to="">{user ? `welcome ${user.user_name}`:""}</Nav.Link>
                <Link to="/chat">Chat</Link>
                <Link to="/join">Join</Link>
            </Fragment>
        )

        return (
            <Fragment>
                <Router history={history}>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                            <Container>
                                <Navbar.Brand to="/home">Airbnb</Navbar.Brand>
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
                            <PrivateRoute path="/join" component={Join} />
                            <PrivateRoute path="/chat" component={Chat} />
                            <LoggedInProtection path = "/login" component={Login} />
                            <LoggedInProtection path = "/signup" component={SignUp} />
                            <Route component={NoPageFound} />
                        </Switch>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    authReducer:state.authReducer
})
export default connect(mapStateToProps,null)(MainNavigationBar)
