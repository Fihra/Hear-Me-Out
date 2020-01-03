import React from 'react';

class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            newUsername: "",
            newPassword: "",
            confirmPassword: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { newUsername, newPassword } = this.state;

    }

    render(){
        return(
            <div>
                <h2>Signup</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>New Username</label>
                    <input type="text" name="newUsername" placeholder="username" onChange={this.handleChange}></input>
                    <label>New Password</label>
                    <input type="password" name="newPassword" placeholder="password" onChange={this.handleChange}></input>
                    {/* <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" placeholder="confirm password" ></input> */}
                    <button type="submit" value="Submit">Submit</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}

export default Signup;