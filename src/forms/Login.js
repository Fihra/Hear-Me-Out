import React from 'react';

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

    handleSubmit = (e) => {
        e.preventDefault();

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