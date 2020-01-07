import React from 'react';
import { Link} from 'react-router-dom';
//import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
//import { Tabs, Tab } from '@material-ui/core';

class Navbar extends React.Component{
    render(){
        return(
            // <Router>
            <div>
                {/* <Tabs>
                    <Tab label="Home" component={Link} to='/'/>
                    <Tab label="About" component={Link} to='/about'/>
                    <Tab label="Directory" component={Link} to='/directory'/>
                    <Tab label="Profile" component={Link} to='/profile'/>
                    <Tab label="Login/Signup" component={Link} to='/login'/>
                </Tabs>
                <Switch>
                    <Link to="/"></Link>
                    <Link to='/about'></Link>
                    <Link to='/directory'></Link>
                    <Link to='/profile'></Link>
                    <Link to='/login'></Link>
                </Switch> */}
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/directory'>Directory</Link></li>
                    <li><Link to='/profile/:id'>Profile</Link></li>
                    <li><Link to='/login'>Login/Signup</Link></li>
                </ul>

            </div>
            // </Router>
        )
    }
}

export default Navbar;