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
                path: "/dashboard/team/submission/:cid",
                exact: true,
                component: lazy(() => import("./views/DashboardTeamSubmission"))
            },
            {
                path: "/dashboard/information",
                exact: true,
                component : lazy(() => import("./views/DashboardInformation"))
            },
            {
                path: "/dashboard/judger/submission",
                exact: true,
                component : lazy(() => import("./views/DashboardInformation"))
            },
            {
                path: "/dashboard/manage/news",
                exact: true,
                component : lazy(() => import("./views/DashboardAdminManageNews"))
            },
            {
                path: "/dashboard/manage/users",
                exact: true,
                component : lazy(() => import("./views/DashboardAdminManageUsers"))
            },
            {
                path: "/dashboard/manage/teams",
                exact: true,
                component : lazy(() => import("./views/DashboardAdminManageTeams"))
            },
            {
                path: "/dashboard/manage/teams/view/:tid",
                exact: true,
                component : lazy(() => import("./views/DashboardAdminManageTeamsView"))
            },
            {
                path: "/dashboard/manage/accounts",
                exact: true,
                component : lazy(() => import("./views/DashboardAdminManageAccounts"))
            },
            {
                path: "/dashboard/manage/judge",
                exact: true,
                component : lazy(() => import("./views/DashboardJudgerManageJudge"))
            },
            {
                path: "/dashboard/manage/judge/view",
                exact: true,
                component : lazy(() => import("./views/DashboardJudgerManageJudgeView"))
            },

        ]
    }
]

export default routes;
