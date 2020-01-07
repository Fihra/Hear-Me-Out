import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inEditMode: false,
            savedID: "",
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

    changeEditMode = () => {
        this.setState({
            inEditMode: !this.state.inEditMode
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitChanges = (e) => {
        e.preventDefault();
        this.props.updateUser(this.state);
    }

    renderEditView = () => {
        return (
            <form onSubmit={this.submitChanges}>      
                <p>Alias: <input type="text" name="alias" defaultValue={this.state.alias} onChange={this.handleChange}></input></p>
                <p>First Name: <input type="text" name="firstName" defaultValue={this.state.firstName} onChange={this.handleChange}></input></p>
                <p>Last Name: <input type="text" name="lastName" defaultValue={this.state.lastName} onChange={this.handleChange}></input></p>
                <p>Email: <input type="email" name="email" defaultValue={this.state.MEmail} placeholder={this.state.MEmail} onChange={this.handleChange}></input></p>
                <p>Location: <input type="text" name="location" defaultValue={this.state.location} onChange={this.handleChange}></input></p>
                <p>Main Role: <input type="text" name="mainRole" defaultValue={this.state.mainRole} onChange={this.handleChange}></input></p>
                <p>Other Roles: </p>
                <p>Instruments: </p>
                <p>Featured Youtube Link: <input type="text" name="featYoutube" defaultValue={this.state.featYoutube} onChange={this.handleChange}></input></p>
                <p>Youtube Channel: <input type="text" name="youtube" defaultValue={this.state.youtube} onChange={this.handleChange}></input></p>
                <p>Bandcamp Link: <input type="text" name="bandcamp" defaultValue={this.state.bandcamp} onChange={this.handleChange}></input></p>
                <p>Spotify Link: <input type="text" name="spotify" defaultValue={this.state.spotify} onChange={this.handleChange}></input></p>
                <p>Main Website: <input type="text" name="mainWeb" defaultValue={this.state.mainWeb} onChange={this.handleChange}></input></p>
                <button type="submit" value="Submit">Submit Changes</button>
            </form>
            )    
    }

    renderDefaultView = () => {
        const { MEmail } = this.state;
        return (
        <div>      
            <p>Alias: </p>
            <p>First Name: </p>
            <p>Last Name: </p>
            <p>Email: {MEmail} </p>
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

    componentDidMount(){
        const { musicians } = this.props;
        const { id } = this.props.location.state;
        let selectedMusician = musicians.filter((musician, i ) => {
            return musician._id === id;
        })

        const { email, password, firstName, lastName } = selectedMusician[0];

        this.setState({
            savedID: id,
            firstName, firstName,
            lastName: lastName,
            MEmail: email
        })
    }

    render(){
        // const { musicians } = this.props;
        // const { id } = this.props.location.state;
        // let selectedMusician = musicians.filter((musician, i ) => {
        //     return musician._id === id;
        // })

        return(
            <div>
            <h1>My Profile <button onClick={this.changeEditMode}>Edit</button></h1>
            {this.state.inEditMode ? this.renderEditView() : this.renderDefaultView()}
            </div>
        
        )
    }
}

export default Profile;