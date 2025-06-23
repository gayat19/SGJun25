export const isAuthenticated =()=>{
    return localStorage.getItem('username')?true:false
}