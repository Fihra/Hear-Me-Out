import React from 'react';
import { Link} from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';

class Navbar extends React.Component{
    logInOut = () => {
        if(localStorage.jwtToken){
            return <Tab label="Logout" component={Link} to='/logout'/>
        } else{
            return <Tab label="Login/Signup" component={Link} to='/login'/>
        }
    }

    render(){
        console.log(localStorage.jwtToken)
        return(
            <div>
                <Tabs>
                    <Tab label="Home" component={Link} to='/'/>
                    <Tab label="Directory" component={Link} to='/directory'/>
                    <Tab label="Profile" component={Link} to='/profile'/>
                    {this.logInOut()}
                </Tabs>
                {/* <ul>
                    <li><Link to="/">Home</Link></li> */}
                    {/* <li><Link to='/about'>About</Link></li> */}
                    {/* <li><Link to='/directory'>Directory</Link></li>
                    <li><Link to='/profile/:id'>Profile</Link></li>
                    <li><Link to='/login'>Login/Signup</Link></li>
                </ul> */}
            </div>
        )
    }
}

export default Navbar;