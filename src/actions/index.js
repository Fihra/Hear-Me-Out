import axios from 'axios';

const API = 'http://localhost:3001/api/users';

export function loadUsers(){
    return async(dispatch) => {
        await axios.get(API)
        .then()
        .then(resp => {
            dispatch(getUsers(resp.data));
        })
    }
}

export function getUsers(users){
    return{
        type: "FETCH_USERS",
        users: users
    }
}

export function newUser(email, password) {
    console.log(email, password);
    return((dispatch) => {
        axios.post(API, {
            email: email,
            password: password
        })
        .then(resp => dispatch(createUser(resp.data)))
    })
}

export function createUser(user){
    return {
        type: "SIGN_UP",
        newUser: user
    }
}

export function updateUser(user){
    console.log(user);

    // const body = {
    //     email: user.MEmail,
    //     alias: user.alias,
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     location: user.location,
    //     mainRole: user.mainRole,
    //     otherRoles: user.otherRoles,
    //     instruments: user.instruments,
    //     featuredYoutube: user.featYoutube,
    //     bandcampLink: user.bandcamp,
    //     spotifyLink: user.spotify,
    //     mainWebsite: user.mainWeb 
    // }
    //debugger;
    return((dispatch) => {
        axios.put(`${API}/${user.savedID}`, user)
        .then(resp => {
            //debugger;
            dispatch(updateUserInfo(user));
        })
        .catch(err => console.error(err))
    })
}

export function updateUserInfo(user){
    return{
        type: "UPDATE_USER",
        updatedUser: user
    }
}