import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form} from 'react-bootstrap'

import io from 'socket.io-client';
const socket = io('http://localhost:4000');

class Chat extends Component {
    state = {
        message: ""
      }
    //   componentDidMount() {
    //     this.socket = io('http://www.example.com');
    //   }
    
    //   componentWillUnmount() {
    //     this.socket.close();
    //   }

      handleSubmit = event => {
        event.preventDefault()
        const {message} = this.state
  
        socket.emit('send_message', {
            reciever:"0781459239",
            sender:"0701202146",
            message:message
        });
        var html  = ""
        html += "<li>You said: " + message + "</li>"
        document.getElementById('message').innerHTML += html
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    onUserSelected = (username) => {
        console.log(username)
    }
    
    render(){
        const { user } = this.props.authReducer
        socket.emit('user_connected', user.user_contact);

        socket.on("new_message", function(data){
            console.log(data)
            var html  = ""
            html += "<li>" + data.sender + "says: " + data.message + "</li>"
            document.getElementById('message').innerHTML += html
        })

        return (
            <div className="mt-5">
                <h6>Chat</h6>
                <ul>
                    <li><button onClick={this.onUserSelected('0781459239')}>0701202146</button></li>
                    <li><button>0781459239</button></li>
                </ul>
                <ul id="message"></ul>
                <form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicContact">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text"
                            placeholder="user message..."
                            name = 'message'
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                        <button type="submit" className="btn  btn-secondary active btn-block">Login</button>
                    </Form.Group>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    authReducer:state.authReducer
})
export default connect(mapStateToProps,null)(Chat)
