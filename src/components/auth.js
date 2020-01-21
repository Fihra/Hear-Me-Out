export const auth = {
    isAuthenticated: false,
    authenticate(){
        this.isAuthenticated = true
    },
    logout(){
        this.isAuthenticated = false
    }
}