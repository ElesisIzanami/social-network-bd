import login from "../views/login"
import wall from "../views/wall"
import error from "../views/error"


const routes = [
    { path: '/', component: login },
    { path: '/wall', component: wall },
    { path: '/error', component: error }
]

export {routes}