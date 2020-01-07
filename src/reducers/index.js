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
            const updateUser = action.updatedUser;
            debugger;
            return{
                ...state.map((user) => {
                    return user.id === updateUser.savedID
                } )
            }
        default:
            return state;
    }
}

export default mainReducer;