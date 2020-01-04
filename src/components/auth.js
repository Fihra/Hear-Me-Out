// class Auth {
//     constructor(){
//         this.authenticated = false;
//     }

//     login(cb) {
//         this.authenticated = true;
//         cb();
//     }

//     logout(cb) {
//         this.authenticated = false;
//         cb();
//     }

//     isAuthenticated() {
//         return this.authenticated;
//     }
// }

// export default new Auth();

export const auth = {
    isAuthenticated: false,
    authenticate(cb){
        this.isAuthenticated = true
    },
    signout(cb){
        this.isAuthenticated = false
    }
}