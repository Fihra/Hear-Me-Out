export const auth = {
    isAuthenticated: false,
    authenticate(){
        this.isAuthenticated = true
    },
    signout(){
        this.isAuthenticated = false
    }
}