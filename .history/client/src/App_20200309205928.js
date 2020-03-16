import React from 'react';
import logo from './logo.svg';
import './App.css';

// import websocket
import {w3cwebsocket as W3CWebSocket}  from 'websocket'
const client = new W3CWebSocket('ws://127.0.0.1:3000');

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
