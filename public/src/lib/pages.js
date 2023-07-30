import login from "../views/login"
import wall from "../views/wall"
import profile from "../views/profile"
import createAccount from "../views/createAccount"
import error from "../views/error"


const routes = [
    { path: '/', component: login },
    { path: '/wall', component: wall },
    { path: '/profile', component: profile },
    { path: '/createAccount', component: createAccount },
    { path: '/error', component: error }
]

export {routes}