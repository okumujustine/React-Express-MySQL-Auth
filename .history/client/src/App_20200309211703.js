import React,{Component} from 'react';

// import websocket
import {w3cwebsocket as W3CWebSocket}  from 'websocket'
const ws = new W3CWebSocket('ws://127.0.0.1:8080');

class App extends Component{
  componentWillMount() {
    ws.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    ws.onmessage = (message) => {
      console.log(message);
    };
    
    ws.close = () => {
      console.log('WebSocket Client Closed');
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
