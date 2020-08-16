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
            },
            {
                path: "/dashboard/team/edit",
                exact: true,
                component : lazy(() => import("./views/EditTeamDashboardPage"))
            },
            {
                path: "/dashboard/team/submission",
                exact: true,
                component: lazy(() => import("./views/SubmissionTeamDashboardPage"))
            },
            {
                path: "/dashboard/information",
                exact: true,
                component : lazy(() => import("./views/InformationDashboardPage"))
            }
        ]
    }
]

export default routes;
