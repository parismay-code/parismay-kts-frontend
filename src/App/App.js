import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";

import routes from "./configs/routes";

import './App.scss';

const App = () => {
    return (
        <div className="app">
            <header className='app__header'>
                <Header routes={routes}/>
            </header>
            <main className='app__main'>
                <Switch>
                    <Route path={routes.home.index}>
                        <HomePage routes={routes}/>
                    </Route>
                    <Redirect to={routes.home.index}/>
                </Switch>
            </main>
            <span className='app__copyright'>© 2021 | Kuznetsov Kirill Andreevich</span>
        </div>
    );
}

export default App;
