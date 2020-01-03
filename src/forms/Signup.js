import React from 'react';

class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            newEmail: "",
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

        const { newEmail, newPassword } = this.state;

        this.props.newUser(newEmail, newPassword);

        e.target.reset();
    }

    render(){
        return(
            <div>
                <h2>Signup</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>New Email</label>
                    <input type="email" name="newEmail" placeholder="email" onChange={this.handleChange}></input>
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