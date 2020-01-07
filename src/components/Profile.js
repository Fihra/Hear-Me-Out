import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inEditMode: false,
            alias: "",
            firstName: "",
            lastName: "",
            MEmail: "",
            location: "",
            mainRole: "",
            otherRoles: [],
            instruments: [],
            featYoutube: "",
            youtube: "",
            bandcamp: "",
            spotify: "",
            mainWeb: ""
        }
    }
    
    allDetails = (email) => {
        this.setState({
            email: email,
        })
    }

    changeEditMode = () => {
        this.setState({
            inEditMode: !this.state.inEditMode
        })
    }

    renderEditView = () => {
        return (
            <div>      
                <p>Alias: <input type="text" name="alias" defaultValue={this.state.alias}></input></p>
                <p>First Name: </p>
                <p>Last Name: </p>
                <p>Email: <input type="email" name="email" defaultValue={this.state.MEmail} placeholder={this.state.MEmail}></input></p>
                <p>Location: </p>
                <p>Main Role: </p>
                <p>Other Roles: </p>
                <p>Instruments: </p>
                <p>Featured Youtube Link: </p>
                <p>Youtube Channel: </p>
                <p>Bandcamp Link: </p>
                <p>Spotify Link: </p>
                <p>Main Website: </p>
            </div>
            )    
    }

    renderDefaultView = (musician) => {
        const { email } = musician;
        return (
        <div>      
            <p>Alias: </p>
            <p>First Name: </p>
            <p>Last Name: </p>
            <p>Email: {email} </p>
            <p>Location: </p>
            <p>Main Role: </p>
            <p>Other Roles: </p>
            <p>Instruments: </p>
            <p>Featured Youtube Link: </p>
            <p>Youtube Channel: </p>
            <p>Bandcamp Link: </p>
            <p>Spotify Link: </p>
            <p>Main Website: </p>
        </div>
        )    
    }

    render(){
        const { musicians } = this.props;
        const { id } = this.props.location.state;
        let selectedMusician = musicians.filter((musician, i ) => {
            return musician._id === id;
        })

        //const { email, password } = selectedMusician[0];

        //this.allDetails(email);

        return(
            <div>
            <h1>My Profile <button onClick={this.changeEditMode}>Edit</button></h1>
            {this.state.inEditMode ? this.renderEditView() : this.renderDefaultView(selectedMusician[0])}
            </div>
        
        )
    }
}

export default Profile;