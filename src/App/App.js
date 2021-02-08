import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";

import './App.scss';

const App = () => {
    return (
        <div className="app">
            <header className='app__header'>
                <Header />
            </header>
            <main className='app__main'>
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Redirect to='/home'/>
                </Switch>
            </main>
            <span className='app__copyright'>© 2021 | Kuznetsov Kirill Andreevich</span>
        </div>
    );
}

export default App;
