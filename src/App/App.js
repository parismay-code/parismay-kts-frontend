import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

import HomePage from "./pages/HomePage";

import './app.scss';

const App = () => {
    return (
        <Router>
            <div className="app">
                <header className='app-header'>
                    <div className='app-header-container'>
                        <div className='app-header-container__logo'>NLRG</div>
                        <nav className='app-header-container-navigation'>
                            <ul className='app-header-container-navigation-list'>
                                <Link to='/' className='app-header-container-navigation-list__element'>
                                    Home
                                </Link>
                                <Link to='/artists' className='app-header-container-navigation-list__element'>
                                    Artists
                                </Link>
                                <Link to='/contacts' className='app-header-container-navigation-list__element'>
                                    Contacts
                                </Link>
                            </ul>
                            <div className='app-header-container-navigation__slider'/>
                        </nav>
                    </div>
                </header>
                <main className='app-main'>
                    <Switch>
                        <Route path='/' component={HomePage}/>
                        <Redirect to='/'/>
                    </Switch>
                </main>
                <span className='app__copyright'>© 2021 |  Kuznetsov Kirill Andreevich</span>
            </div>
        </Router>
    );
}

export default App;
