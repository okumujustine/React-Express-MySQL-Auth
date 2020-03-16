
import React, {Component, Fragment} from 'react'
import Chat from '../Chat/Chat'
import Join from '../Join/Join'
import Login from '../Accounts/Login'
import Home from '../Home/Home'
import SignUp from '../Accounts/Sign'
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap'

import { connect } from 'react-redux'
import { Router, Switch} from 'react-router-dom'
import history from '../config/PrivateRoute/history'

import PrivateRoute from '../config/PrivateRoute/PrivateRoute'
import LoggedInProtection from '../config/PrivateRoute/LoggedInProtection'

class MainNavigationBar extends Component {

    render(){
        const { isAuthenticated, user } = this.props.authReducer

        const beforeAuthLinks = (
            <Fragment>
                <Nav.Link to="/login">Login</Nav.Link>
                <Nav.Link to="/signup">SignUp</Nav.Link>
            </Fragment>
        )

        const afterAuthLinks = (
            <Fragment>
                <Nav.Link to="">{user ? `welcome ${user.user_name}`:""}</Nav.Link>
                <Nav.Link to="/logout">Chat</Nav.Link>
            </Fragment>
        )

        return (
            <div>
                <Router history={history}>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                            {(isAuthenticated!==null)?<PrivateRoute exact path = "/" component={Home}/>:null}
                            {(isAuthenticated!==null)?<PrivateRoute path="/join" component={Join} />:null}
                            {(isAuthenticated!==null)?<PrivateRoute path="/chat" component={Chat} />:null}
                            {(isAuthenticated!==null)?<LoggedInProtection path = "/login" component={Login} />:null}
                            <LoggedInProtection path = "/signup" component={SignUp} />
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
