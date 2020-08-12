import {lazy} from "react"

const routes = [
    {
        path: "/",
        exact: true,
        component : lazy(() => import("./views/LandingPage"))
    },
    {
        path: "/login",
        exact: true,
        component : lazy(() => import("./views/LoginPage"))
    }
]

export default routes;