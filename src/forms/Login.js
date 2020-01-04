import React from 'react';
import auth from '../components/auth';

class Login extends React.Component{
    constructor(props){
        super();
        this.state ={
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validateUser = () => {
        this.props.musicians.forEach((m) => {
            if(m.email === this.state.email && m.password === this.state.password){
                return console.log("Success");
            }
            else {
                console.log("Failure");
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.validateUser();
    }

    render(){
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