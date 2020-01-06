import React from 'react';
import {auth} from '../components/auth';
import { Redirect } from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: "",
            password: "",
            redirectToReferrer: false,
            savedID: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loggingIn = () => {
        auth.authenticate();
        this.setState({
            redirectToReferrer: true
        })
       
    }

    saveIDReference = (id) => {
        this.setState({
            savedID: id
        })
    }

    validateUser = () => {
        const {musicians} =this.props;
        const { email, password } = this.state;

        musicians.find((m, i ) => {
            if(m.email === email && m.password === password){
                this.saveIDReference(m._id);
                this.loggingIn();
                //console.log(this.state.redirectToReferrer);              
            }
            return null;
        })    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.validateUser();
    }

    render(){
        const { redirectToReferrer, savedID } = this.state;
        console.log(savedID);
        if(redirectToReferrer === true){
            return(
                <Redirect to={{pathname:'/profile', state:{id: savedID}}}/>
            )
        }

        return(
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="email" onChange={this.handleChange}></input>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="password" onChange={this.handleChange}></input>
                    <button type="submit" value="Submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;