import React, {Component} from 'react'
import Chat from './components/Chat/Chat'
import Join from './components/Join/Join'
import Login from './components/Accounts/Login'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './components/Redux/Store/index'
import { loadUser } from './components/Redux/Action/authAction'

export default class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render(){
    return (
      <Provider store={store}>
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
      </Provider>
    )
  }
}

