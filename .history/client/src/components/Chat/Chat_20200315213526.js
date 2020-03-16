import React, {Component} from 'react'
import {connect} from 'react-redux'

class Chat extends Component {
    state = {
        message: ""
      }

      handleSubmit = event => {
        event.preventDefault()
        const {message} = this.state
        console.log("message")
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }
    render(){
        let reciever = ""
        let sender = ""
        onUserSelected = (username) => {
            reciever = username
        }

        return (
            <div className="mt-5">
                <h6>Chat</h6>
                <ul>
                    <li><button onClick={this.onUserSelected('0781459239')}>0701202146</button></li>
                    <li><button>0781459239</button></li>
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicContact">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text"
                            placeholder="user message..."
                            name = 'message'
                            value={this.state.message}
                            onChange={this.handleChange}
                            />
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
