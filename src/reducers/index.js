const initialState = {
    users: []
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case "SIGN_UP":
            return{
                ...state, 
                users: [...state.users, action]
            }
    }
}