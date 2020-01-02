import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li>Directory</li>
                    <li>Profile</li>
                    <li>Login/Signup</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;