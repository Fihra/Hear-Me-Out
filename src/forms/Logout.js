import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../components/auth.js';
import { logoutUser } from '../actions';

const mapDispatchToProps = (dispatch) =>{
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

class Logout extends React.Component{
    componentDidMount(){
        auth.logout();
        localStorage.removeItem('jwtToken');
        this.props.logoutUser();
    }

    render(){
        return(
            <Redirect to='/'/>
        )
    }
}

export default connect(null, mapDispatchToProps)(Logout);