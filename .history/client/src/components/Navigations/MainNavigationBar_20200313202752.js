
import React, {Component} from 'react'
import Chat from '../Chat/Chat'
import Join from '../Join/Join'
import Login from '../Accounts/Login'

import { connect } from 'react-redux'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

class MainNavigationBar extends Component {
    render(){
        const { isAuthenticated } = this.props.authReducer
        
        return (
            <div>
                <Router>
                    <div>
                        <nav>
                            <ul>
                            <li>
                            {isAuthenticated && (
                                <Link to="/">Login</Link>
                            )}
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
}

const mapStateToProps = state => ({
    authReducer:state.authReducer
})
export default connect(mapStateToProps,null)(MainNavigationBar)
