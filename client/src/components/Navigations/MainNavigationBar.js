
import React, {Component, Fragment} from 'react'
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
                <Nav.Link to="/Home" className="nav-link">Home</Nav.Link>
                <Nav.Link to="">{user ? `${user.user_name}`:""}</Nav.Link>
            </Fragment>
        )

        return (
            <div>
                <Router history={history}>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                            <Container>
                                <Navbar.Brand to="/home">MernAuth</Navbar.Brand>
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
                            <LoggedInProtection path = "/login" component={Login} />
                            <LoggedInProtection path = "/Home" component={Home} />
                            <LoggedInProtection path = "/signup" component={SignUp} />
                            <Route component={NoPageFound} />
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
