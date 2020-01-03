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

export function newUser(name, password) {
    console.log(name, password);
    return((dispatch) => {
        axios.post(`${API}`, {
            name: name,
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