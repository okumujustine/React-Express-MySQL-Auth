import React from 'react'
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'



const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
        {...rest}
        render = {props =>
            
            localStorage.getItem('auth-token') ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {
                              from: props.location
                            }
                        }}
                    />
            )
            // if(authReducer.isLoading){
            //     return <h2>Loading...</h2>
            // }else if(!authReducer.isAuthenticated){
            //     return <Redirect to={{
            //         pathname: '/login',
            //         state: { from: props.location }
            //       }} />
            // }else{
            //     return <Component {...props} />
            // }
        }
        />
    )

const mapStateToProps = (state) =>({
    authReducer:state.authReducer
})

export default connect(mapStateToProps)(PrivateRoute);