import React from 'react'
import { Route} from 'react-router-dom';
import { connect } from 'react-redux'



const PrivateRoute = ({ component: Component, auth, ...rest }) => (
        <Route
        {...rest}
        render = {props =>{
            if(auth.isLoading){
                return <h2>Loading...</h2>
            }else if(!auth.isAuthenticated){
                // return <Redirect to="/login" />
                console.log(auth.isAuthenticated)
            }else{
                return <Component {...props} />
            }
        }}
        />
    )

const mapStateToProps = (state) =>({
    auth:state.authReducer
})

export default connect(mapStateToProps, null)(PrivateRoute);