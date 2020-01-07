const initialState = {
    users: []
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_USERS":
            return{
                ...state,
                users: action.users
            }
        case "SIGN_UP":
            return{
                ...state, 
                users: [...state.users, action.newUser]
            }
        case "UPDATE_USER":
            const userID = action.updatedUser;
            debugger;
            return{
                ...state.map((user) => {
                    return user.id === userID.id
                } )
            }
        default:
            return state;
    }
}

export default mainReducer;