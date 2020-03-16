import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from './components/Redux/Store/index'
import { loadUser } from './components/Redux/Action/authAction'
import MainNavigationBar from './components/Navigations/MainNavigationBar'

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

