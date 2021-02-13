import * as React from 'react';

import HomeHOC from "./HomeHOC";
import HomeArtists from "../../components/HomeArtists";
import HomeSongs from "../../components/HomeSongs";
import HomeTags from "../../components/HomeTags";

import styles from './Home.module.scss';


/*
artists = {
    name: string,
    playcount: string,
    listeners: string,
    mbid: string,
}

songs = {
    name: string,
    playcount: string,
    listeners: string
}

tags = {
    name: string,
    reach: string,
    taggings: string
}
 */

const Home = ({isLoading, artistsData, songsData, tagsData}) => {
    return <>
        {
            isLoading ? <div className={styles.home__loading}><div/><div/></div> :
                <div className={styles.home}>
                    <HomeArtists data={artistsData}/>
                    <HomeSongs data={songsData}/>
                    <HomeTags data={tagsData}/>
                </div>
        }
    </>

}

export default HomeHOC(Home);