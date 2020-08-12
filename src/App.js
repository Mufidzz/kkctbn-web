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

const history = createBrowserHistory();

const App = () => {
    return (
        <Suspense fallback={<LinearProgress/>}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Router history={history}>
                    {renderRoutes(routes)}
                </Router>
            </MuiPickersUtilsProvider>
        </Suspense>
    );
}

export default App;
