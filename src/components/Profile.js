import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions';

const mapStateToProps = (state) => {
    return{
        selectedUser: state.selectedUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user))
    }
}

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inEditMode: false,
            savedID: "",
            alias: "",
            firstName: "",
            lastName: "",
            email: "",
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

    setDetails = () => {
        const { user } = this.props.selectedUser
        this.setState({
            savedID: user._id,
            alias: user.alias,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            location: user.location,
            mainRole: user.mainRole,
            featYoutube: user.featYoutube,
            youtube: user.youtube
        })
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
        const { alias, firstName, lastName, email, location, mainRole, featYoutube, youtube, bandcamp, spotify, mainWeb} = this.state;

        return (
            <form onSubmit={this.submitChanges}>      
                <p>Alias: <input type="text" name="alias" defaultValue={alias} onChange={this.handleChange}></input></p>
                <p>First Name: <input type="text" name="firstName" defaultValue={firstName} onChange={this.handleChange}></input></p>
                <p>Last Name: <input type="text" name="lastName" defaultValue={lastName} onChange={this.handleChange}></input></p>
                <p>Email: <input type="email" name="email" defaultValue={email} placeholder={email} onChange={this.handleChange}></input></p>
                <p>Location: <input type="text" name="location" defaultValue={location} onChange={this.handleChange}></input></p>
                <p>Main Role: <input type="text" name="mainRole" defaultValue={mainRole} onChange={this.handleChange}></input></p>
                <p>Other Roles: </p>
                <p>Instruments: </p>
                <p>Featured Youtube Link: <input type="text" name="featYoutube" defaultValue={featYoutube} onChange={this.handleChange}></input></p>
                <p>Youtube Channel: <input type="text" name="youtube" defaultValue={youtube} onChange={this.handleChange}></input></p>
                <p>Bandcamp Link: <input type="text" name="bandcamp" defaultValue={bandcamp} onChange={this.handleChange}></input></p>
                <p>Spotify Link: <input type="text" name="spotify" defaultValue={spotify} onChange={this.handleChange}></input></p>
                <p>Main Website: <input type="text" name="mainWeb" defaultValue={mainWeb} onChange={this.handleChange}></input></p>
                <button type="submit" value="Submit">Submit Changes</button>
            </form>
            )    
    }

    renderDefaultView = () => {
        const { alias, firstName, lastName, email, location, mainRole, featYoutube, youtube, bandcamp, spotify, mainWeb} = this.state;

        // const defaultShow = {
        //     defaultAlias: alias,
        //     defaultFirst: firstName,
        //     defaultLast: lastName,
        //     defaultEmail: email,
        //     defaultLocation: location,
        //     defaultMainRole: mainRole,
        //     defaultFeatYoutube: featYoutube,
        //     defaultYoutube: youtube,
        //     defaultBandcamp: bandcamp,
        //     defaultSpotify: spotify
        // }
        //console.log(this.state);
        return (
        <div>      
             {/* <p>Alias: {defaultShow.defaultAlias}</p>
            <p>First Name: {defaultShow.defaultFirst}</p>
            <p>Last Name: {defaultShow.defaultLast}</p>
            <p>Email: {defaultShow.defaultEmail} </p>
            <p>Location: {defaultShow.defaultLocation}</p>
            <p>Main Role: {defaultShow.defaultMainRole}</p>
            <p>Other Roles: </p>
            <p>Instruments: </p>
            <p>Featured Youtube Link: {defaultShow.defaultFeatYoutube} </p>
            <p>Youtube Channel: {defaultShow.defaultYoutube} </p>
            <p>Bandcamp Link: </p>
            <p>Spotify Link: </p>
            <p>Main Website: </p> */}

            <p>Alias: {alias}</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email} </p>
            <p>Location: {location}</p>
            <p>Main Role: {mainRole}</p>
            <p>Other Roles: </p>
            <p>Instruments: </p>
            <p>Featured Youtube Link: {featYoutube} </p>
            <p>Youtube Channel: {youtube} </p>
            <p>Bandcamp Link: </p>
            <p>Spotify Link: </p>
            <p>Main Website: </p>
        </div>
        )    
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.selectedUser !== prevState){
            return { updatedUser: nextProps.selectedUser }
        }
        else return null;
        // console.log('nextProps')
        // console.log(nextProps)
        // console.log('prevState')
        // console.log(prevState)
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log('PrevProps')
        console.log(prevProps !== this.props.selectedUser)
        //console.log(prevProps)
        //console.log(prevState)
        //console.log(this.props.selectedUser)
        console.log('check again after update')
        if(prevProps.selectedUser !== this.props.selectedUser ){
            this.setDetails();
        }   
    }

    render(){
        return(
            <div>
            <h1>My Profile <button onClick={this.changeEditMode}>Edit</button></h1>
            {this.state.inEditMode ? this.renderEditView() : this.renderDefaultView()}
            </div>  
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);