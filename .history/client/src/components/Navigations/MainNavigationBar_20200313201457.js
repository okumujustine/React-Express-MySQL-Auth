
import React from 'react'
import Chat from '../Chat/Chat'
import Join from '../Join/Join'
import Login from '../Accounts/Login'

import { connect } from 'react-redux'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

function MainNavigationBar() {
    return (
        <div>
            <Router>
                <div>
                    <nav>
                        <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/Join">Join</Link>
                        </li>
                        <li>
                            <Link to="/Chat">Chat</Link>
                        </li>
                        </ul>
                    </nav>
                    <Switch>
                    <Route exact path = "/">
                        <Login/>
                    </Route>
                    <Route path = "/Join" >
                        <Join/>
                    </Route>
                    <Route path = "/Chat">
                        <Chat />
                    </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated:state.authReducer
})
export default connect(mapStateToProps,null)(MainNavigationBar)
