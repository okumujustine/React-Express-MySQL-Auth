import React from 'react'
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'



const PrivateRoute = ({ component: Component, auth, ...rest }) => (
        // <Route
        // {...rest}
        // render = {props =>{
        //     if(auth.isLoading){
        //         return <h2>Loading...</h2>
        //     }else if(!auth.isAuthenticated){
        //         return <Redirect to="/login" />
        //     }else{
        //         return <Component {...props} />
        //     }
        // }}
        // />
        <Route {...rest} render={(props) => (
            auth.isAuthenticated === true
              ? <Component {...props} />
              : <Redirect to='/login' />
          )} />
    )

const mapStateToProps = (state) =>({
    auth:state.authReducer
})

export default connect(mapStateToProps, null)(PrivateRoute);