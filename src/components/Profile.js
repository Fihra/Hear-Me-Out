import React from 'react';

class Profile extends React.Component{
    
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>My Profile <button>Edit</button></h1>
                <h3>Alias: </h3>
                <h3>First Name: </h3>
                <h3>Last Name: </h3>
                <h3>Email: </h3>
                <h3>Location: </h3>
                <h3>Main Role: </h3>
                <h3>Other Roles: </h3>
                <h3>Instruments: </h3>
                <h3>Featured Youtube Link: </h3>
                <h3>Youtube Channel: </h3>
                <h3>Bandcamp Link: </h3>
                <h3>Spotify Link: </h3>
                <h3>Main Website: </h3>
            </div>
        )
    }
}

export default Profile;