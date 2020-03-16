import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from './components/Redux/Store/index'
import MainNavigationBar from './components/Navigations/MainNavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';

import { loadUser } from './components/Redux/Action/authAction'

export default class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render(){
    return (
      <Provider store={store}>
        <MainNavigationBar/>
      </Provider>
    )
  }
}

