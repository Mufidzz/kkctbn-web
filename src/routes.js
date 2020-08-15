import {lazy} from "react"
import DashboardLayout from "./layouts/DashboardLayout";

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
    },
    {
        path: "/register",
        exact: true,
        component : lazy(() => import("./views/RegisPage"))
    },
    {
        path: "/competition",
        exact: true,
        component : lazy(() => import("./views/RegisPage"))
    },
    {
        path: "/dashboard",
        component: DashboardLayout,
        routes: [
            {
                path: "/dashboard/user",
                exact: true,
                component : lazy(() => import("./views/UserDashboardPage"))
            }
        ]
    }
]

export default routes;
