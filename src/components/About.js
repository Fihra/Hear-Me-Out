import React from 'react';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';

class About extends React.Component{
    render(){
        return(
            <div>
                {/* <h2>About</h2> */}
                <p>'Hear me out' is a web app for people involved in audio of some sort to hold a directory for everyone. </p>
                <Button variant="outlined" component={Link} to="/login">Signup</Button>
            </div>
        )
    }
}

export default About;