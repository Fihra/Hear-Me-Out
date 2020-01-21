import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt from 'jsonwebtoken';
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
    //console.log(email, password);
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

export function getUser(user){
    return((dispatch) => {
        axios.get(`${API}/${user}`)
        .then(resp => console.log(resp))
    })
}

export function loginUser(user){
    //console.log(user);
    return((dispatch) => {
        axios.post(`${API}/login`, {
            email: user.email,
            password: user.password
        })
        .then(resp => {
            const token = resp.data.accessToken;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const setUser = jwt.decode(token);
            dispatch(loggingUser(setUser))
        })
    })
}

export function loggingUser(user){
    return {
        type: "LOGIN",
        selectedUser: user
    }
}

export function logoutUser(){
    localStorage.removeItem('jwtToken');
    return {
        type: 'LOGOUT_USER'
    }
}

export function updateUser(user){
    return((dispatch) => {
        axios.patch(`${API}/${user.savedID}`, user)
        .then(resp => {
            //console.log(resp)
            dispatch(updateUserInfo(user));
        })
        .catch(err => console.error(err, "Error spot"))
    })
}

export function updateUserInfo(user){
    return{
        type: "UPDATE_USER",
        selectedUser: user
    }
}