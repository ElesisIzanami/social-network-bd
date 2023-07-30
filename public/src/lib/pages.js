import login from "../views/login"
import error from "../views/error"


const routes = [
    { path: '/', component: login },
    { path: '/error', component: error }
]

export {routes}