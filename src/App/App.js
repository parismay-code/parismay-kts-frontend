import * as React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";

import routes from "./configs/routes";

const App = () => {

    return (
        <BrowserRouter>
            <div className='app'>
                <Header/>

                <Switch>
                    <Route path={routes[0].index} exact>
                        <HomePage/>
                    </Route>
                    <Redirect to={routes[0].index}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;