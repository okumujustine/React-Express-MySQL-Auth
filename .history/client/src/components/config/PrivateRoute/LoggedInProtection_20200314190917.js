import React from 'react'
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'



const LoggedInProtection = ({ component: Component, authReducer,...rest }) => (
        <Route
        {...rest}
        render = {props =>{

            if(authReducer.isLoading){
                return <h2>Loading...</h2>
            }else if(authReducer.isAuthenticated){
                return <Redirect to="/" />
            }else{
                return <Component {...props} />
            }
        }}
        />
    )

const mapStateToProps = (state) =>({
    authReducer:state.authReducer
})

export default connect(mapStateToProps)(LoggedInProtection);
