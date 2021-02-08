import {useState} from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import HomeNavigation from "../../components/HomeNavigation";
import Phone from "../../components/Phone";
import AlbumsContent from "../../components/AlbumsContent";
import ArtistsContent from "../../components/ArtistsContent";
import SongsContent from "../../components/SongsContent";

import './HomePage.scss';

const HomePage = (props) => {
    const [currentContent, setCurrentContent] = useState('albums');

    return (
        <div className='home-page'>
            <div className='home-page-content'>
                <HomeNavigation routes={props.routes} currentContent={currentContent} setCurrentContent={setCurrentContent}/>
                <div className='home-page-content-inner'>
                    <Switch>
                        <Route path={props.routes.home.albums} component={AlbumsContent}/>
                        <Route path={props.routes.home.artists} component={ArtistsContent}/>
                        <Route path={props.routes.home.songs} component={SongsContent}/>
                        <Redirect to={props.routes.home.albums}/>
                    </Switch>
                </div>
            </div>
            <Phone />
        </div>
    )
}

export default HomePage;