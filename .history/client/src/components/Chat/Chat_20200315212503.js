import React, {Component} from 'react'
import {connect} from 'react-redux'

class Chat extends Component {
    componentDidMount(){

    }
    render(){
        return (
            <div>
                <h6>Chat</h6>
                <ul>
                    <li><button>0701202146</button></li>
                </ul>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    authReducer:state.authReducer
})
export default connect(mapStateToProps,null)(Chat)
