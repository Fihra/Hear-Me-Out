import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>Home</li>
                    <li>Directory</li>
                    <li>Profile</li>
                    <li>Login/Signup</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;