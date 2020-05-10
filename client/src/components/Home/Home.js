import React, { Component } from 'react'
import './Home.css'
import { connect } from 'react-redux'

class Home extends Component {

    onLogOut = event => {
        localStorage.removeItem('auth-token')
        window.location.reload();
    }

    render() {
        const {user } = this.props.authReducer
        return (
            <div className="body-stylings">
                <h5>You Are Welcome to {user.user_role}'s Area - {user.user_name}</h5>
                <button onClick={this.onLogOut}>LogOut</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authReducer:state.authReducer
})
export default connect(mapStateToProps,null)(Home)
