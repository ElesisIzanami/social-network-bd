import login from "../views/login"
import wall from "../views/wall"
import profile from "../views/profile"
import error from "../views/error"


const routes = [
    { path: '/', component: login },
    { path: '/wall', component: wall },
    { path: '/profile', component: profile },
    { path: '/error', component: error }
]

export {routes}