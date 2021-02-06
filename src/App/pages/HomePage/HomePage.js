import {useState} from 'react';

import HomeCard from "../../components/HomeCard";

import data from "../../store/data";

import './homePage.scss';

const HomePage = () => {
    const [currentContent, setCurrentContent] = useState('albums');
    const [isPhoneOpened, setIsPhoneOpened] = useState(true);

    return (
        <div className='home-page'>
            <div
                className='home-page-content'
                style={isPhoneOpened ? {width: '50%'} : {width: '90%'}}
            >
                <div className='home-page-content-navigation'>
                    <ul className='home-page-content-navigation-list'>
                        {
                            Object.keys(data).map((el, key) => {
                                return (
                                    <li
                                        key={key}
                                        className={
                                            `home-page-content-navigation-list__element ${
                                                currentContent === `${el}` ? 'active' : ''
                                            }`
                                        }
                                        onClick={() => {
                                            const content = document.getElementById('id_homePageContent');
                                            content.style.opacity = '0';
                                            setTimeout(() => {
                                                setCurrentContent(`${el}`);
                                                content.style.opacity = '1';
                                            }, 200)
                                        }}
                                    >
                                        Top 50 {`${el}`}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='home-page-content-inner' id='id_homePageContent'>
                    {
                        currentContent === 'albums' ?
                            data.albums.map((el, key) => {
                                return (
                                    <HomeCard
                                        key={`k_homeCard${key}`}
                                        thumb={el.thumb}
                                        title={el.album}
                                        subtitle={el.artist}
                                    />
                                )
                            }) : currentContent === 'artists' ?
                            data.artists.map((el, key) => {
                                return (
                                    <HomeCard
                                        key={`k_homeCard${key}`}
                                        thumb={el.thumb}
                                        title={el.artist}
                                        subtitle={el.album}
                                    />
                                )
                            }) : data.songs.map((el, key) => {
                                return (
                                    <HomeCard
                                        key={`k_homeCard${key}`}
                                        thumb={el.thumb}
                                        title={el.song}
                                        subtitle={el.album}
                                    />
                                )
                            })
                    }
                </div>
            </div>
            <div className='home-page-phone'>
                <div className='home-page-phone-header'>
                    <div className='home-page-phone-header__camera' />
                    <div className='home-page-phone-header__headphones' />
                </div>
                <div className='home-page-phone-screen'>
                    <div className='home-page-phone-screen-message'>
                        <span className='home-page-phone-screen-message__text'>
                            Hey, did you hear the new album of your favourite artist?
                        </span>
                        <span className='home-page-phone-screen-message__text'>
                            LOL, click on the 'ARTISTS' and check it!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;