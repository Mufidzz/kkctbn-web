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
            },
            {
                path: "/dashboard/team",
                exact: true,
                component : lazy(() => import("./views/TeamDashboardPage"))
            },
            {
                path: "/dashboard/team/create",
                exact: true,
                component : lazy(() => import("./views/CreateTeamDashboardPage"))
            }
        ]
    }
]

export default routes;
