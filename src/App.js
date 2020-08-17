import React, {Suspense} from 'react';
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

const history = createBrowserHistory();

const App = () => {
    return (
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
    );
}

export default App;
