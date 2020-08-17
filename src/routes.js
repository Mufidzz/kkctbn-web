import {lazy} from "react"
import DashboardLayout from "./layouts/DashboardLayout";

const routes = [
    {
        path: "/",
        exact: true,
        component : lazy(() => import("./views/LandingPage"))
    },
    {
        path: "/auth",
        exact: true,
        component : lazy(() => import("./views/AuthorizationPage"))
    },
    {
        path: "/dashboard",
        component: DashboardLayout,
        routes: [
            {
                path: "/dashboard/user",
                exact: true,
                component : lazy(() => import("./views/DashboardUser"))
            },
            {
                path: "/dashboard/team",
                exact: true,
                component : lazy(() => import("./views/DashboardTeam"))
            },
            {
                path: "/dashboard/team/edit",
                exact: true,
                component : lazy(() => import("./views/DashboardTeamData"))
            },
            {
                path: "/dashboard/team/submission",
                exact: true,
                component: lazy(() => import("./views/DashboardTeamSubmission"))
            },
            {
                path: "/dashboard/information",
                exact: true,
                component : lazy(() => import("./views/DashboardInformation"))
            }
        ]
    }
]

export default routes;
