const initialState = {
    users: [],
    selectedUser: {}
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
        case "LOGIN":
            return{
                ...state,
                selectedUser: action.user
            }
        case "UPDATE_USER":
            const updateUser = action.updatedUser;
            console.log(updateUser)
            return{ 
                // ...state.filter((user) => {
                //     return user._id !== action.updateUser.savedID,
                //     Object.assign({}, updateUser )
                // })
                ...state, 
                users: [...state.users.filter((user) => {
                    if(user._id !== updateUser.savedID){
                        return user
                    }
                }), updateUser],
                selectedUser: updateUser
            }
        default:
            return state;
    }
}

export default mainReducer;