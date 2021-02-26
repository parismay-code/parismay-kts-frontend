import * as React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useLocalStore} from "@utils/hooks/useLocal";

import Header from "@components/Header";
import HomePage from "@pages/HomePage";
import ArtistsPage from "@pages/ArtistsPage";

import MainStore from "@store/MainStore";

import routes from "@configs/routes";

const App = () => {
    const store = useLocalStore(() => new MainStore());

    return (
        <BrowserRouter>
            <div className='app'>
                <Header/>

                <Switch>
                    <Route path={routes.home.index} exact>
                        <HomePage store={store}/>
                    </Route>
                    <Route path={routes.artists.mask} exact>
                        <ArtistsPage store={store}/>
                    </Route>
                    <Redirect to={routes.home.index}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default observer(App);