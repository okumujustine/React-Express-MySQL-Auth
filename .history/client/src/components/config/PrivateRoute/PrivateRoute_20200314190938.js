import React from 'react'
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'



const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
        {...rest}
        render = {props =>{
            const { isAuthenticated, isLoading } = this.props.authReducer
            if(isLoading){
                return <h2>Loading...</h2>
            }else if(isAuthenticated){
                return <Redirect to="/" />
            }else{
                return <Component {...props} />
            }

            // localStorage.getItem('auth-token') ? (
            //     <Component {...props} />
            // ) : (
            //         <Redirect
            //             to={{
            //                 pathname: "/login",
            //                 state: {
            //                   from: props.location
            //                 }
            //             }}
            //         />
            // )
            }
        }
        />
    )

const mapStateToProps = (state) =>({
    authReducer:state.authReducer
})

export default connect(mapStateToProps)(PrivateRoute);