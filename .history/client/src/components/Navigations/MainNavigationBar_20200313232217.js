
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
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </Fragment>
        )

        const afterAuthLinks = (
            <Fragment>
                <li>
                    <Link to="/Join">Join</Link>
                </li>
                <li>
                    <Link to="/Chat">Chat</Link>
                </li>
                <li>
                    {user ? `welcome ${user.user_name}`:""}
                </li>
                <li>
                    <Link to="/Chat">Logout</Link>
                </li>
            </Fragment>
        )

        return (
            <div>
                <Router>
                    {/* <div>
                        <nav>
                            <ul>
                                { isAuthenticated ? afterAuthLinks : beforeAuthLinks}
                            </ul>
                        </nav>
                        <Switch>
                        <PrivateRoute exact path = "/" component={Home} />
                        <Route exact path = "/login" component={Login} />
                        <PrivateRoute exact path="/Join" component={Join} />
                        <PrivateRoute exact path="/Chat" component={Chat} />
                        </Switch>
                    </div> */}
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Airbnb</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#features">Okumu Justine</Nav.Link>
                    <Nav.Link href="#pricing">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authReducer:state.authReducer
})
export default connect(mapStateToProps,null)(MainNavigationBar)
