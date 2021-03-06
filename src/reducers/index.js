const initialState = {
    authType: null,
    users: [],
    selectedUser: {},
    isLoggedIn: false
}

const mainReducer = (state = initialState, action) => {
    console.log(action)
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
                isLoggedIn: true,
                selectedUser: action.selectedUser
            }
        case "LOGOUT":
            return{
                ...state,
                isLoggedIn: false,
                selectedUser: {}
            }
        case "UPDATE_USER":
            console.log(action)
            const updateUser = action.selectedUser;

            // const updatedArray = [...state.users.filter((user) => {
            //     if(user._id !== updateUser.savedID){
            //         return user
            //     } 
            // }, updatedUser)]
            //console.log(updatedArray)
            return{ 
                ...state, 
                users: [...state.users.filter((user) => {
                    if(user._id !== updateUser.savedID){
                        return user
                    }
                }), updateUser],
                // users: [...state.users.map((user) => {
                //     if(user._id !== updateUser.savedID){
                //         return user
                //     } else{
                //         return updateUser
                //     }
                // })],
                // users: updatedArray,
                selectedUser: {
                    user: updateUser
                }
            }
        default:
            return state;
    }
}

export default mainReducer;