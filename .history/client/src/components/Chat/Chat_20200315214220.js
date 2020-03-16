import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form} from 'react-bootstrap'

class Chat extends Component {
    state = {
        message: ""
      }

      handleSubmit = event => {
        event.preventDefault()
        const {message} = this.state
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

        return (
            <div className="mt-5">
                <h6>Chat</h6>
                <ul>
                    <li><button onClick="onUserSelected('0781459239')">0701202146</button></li>
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
