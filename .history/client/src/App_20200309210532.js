import React,{Component} from 'react';

// import websocket
import {w3cwebsocket as W3CWebSocket}  from 'websocket'
const client = new W3CWebSocket('ws://127.0.0.1:8080');

class App extends Component{
  componentWillMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      console.log(message);
    };
  }
  render(){
    return (
      <div className="App">
  
      </div>
    );
  }
}

export default App;
