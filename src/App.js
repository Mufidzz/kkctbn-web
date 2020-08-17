import React, {Suspense, useEffect, useMemo, useState} from 'react';
import LinearProgress from "@material-ui/core/LinearProgress";
import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider";
import {Router} from "react-router-dom";
import {createBrowserHistory} from 'history'
import {renderRoutes} from "react-router-config";
import "date-fns"
import DateFnsUtils from "@date-io/date-fns";
import routes from "./routes";
import './assets/scss/index.scss';
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./theme";
import packageJson from '../package.json';

global.appVersion = packageJson.version;

const history = createBrowserHistory();

const semverGreaterThan = (versionA, versionB) => {
    const versionsA = versionA.split(/\./g);

    const versionsB = versionB.split(/\./g);
    while (versionsA.length || versionsB.length) {
        const a = Number(versionsA.shift());

        const b = Number(versionsB.shift());
        // eslint-disable-next-line no-continue
        if (a === b) continue;
        // eslint-disable-next-line no-restricted-globals
        return a > b || isNaN(b);
    }
    return false;
};

const App = () => {
    const [state, setState] = useState({
        loading: true,
        isLatestVersion: false,
        refreshCacheAndReload: () => {
            console.log('Clearing cache and hard reloading...')
            if (caches) {
                // Service worker cache should be cleared with caches.delete()
                caches.keys().then(function (names) {
                    for (let name of names) caches.delete(name);
                });
            }

            // delete browser cache and hard reload
            window.location.reload(true);
        },
        returnChild: null
    })

    useMemo(() => {
        fetch('/meta.json')
            .then((response) => response.json())
            .then((meta) => {
                const latestVersion = meta.version;
                const currentVersion = global.appVersion;

                const shouldForceRefresh = semverGreaterThan(latestVersion, currentVersion);
                if (shouldForceRefresh) {
                    console.log(`We have a new version - ${latestVersion}. Should force refresh`);
                    setState({
                        ...state,
                        loading: false, isLatestVersion: false
                    });
                } else {
                    console.log(`You already have the latest version - ${latestVersion}. No cache refresh needed.`);
                    setState({
                        ...state,
                        loading: false, isLatestVersion: true
                    });
                }
            });
        return () => {
        }
    }, [])

    const realReturn = (
        <Suspense fallback={<LinearProgress/>}>
            <ThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Router history={history}>
                        <CssBaseline/>
                        {renderRoutes(routes)}
                    </Router>
                </MuiPickersUtilsProvider>
            </ThemeProvider>
        </Suspense>
    )


    useEffect(() => {
        if(!state.loading) {
            if (!state.isLatestVersion) {
                state.refreshCacheAndReload()
            }
            setState({
                ...state,
                returnChild: realReturn
            })
        }

    }, [state.loading])

    return (
        <>
            {state.returnChild}
        </>
    )
}


export default App;
