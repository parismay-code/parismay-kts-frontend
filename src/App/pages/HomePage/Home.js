import * as React from 'react';
import {observer} from "mobx-react-lite";
import {useAsync} from "@utils/hooks/useAsync";

import HomeArtists from "@components/HomeArtists";
import HomeSongs from "@components/HomeSongs";
import HomeTags from "@components/HomeTags";

import styles from './Home.module.scss';

const Home = ({ store }) => {
    const artistsData = React.useMemo(() => store.artistsData, [store.artistsData]);
    const songsData = React.useMemo(() => store.songsData, [store.songsData]);
    const tagsData = React.useMemo(() => store.tagsData, [store.tagsData]);

    useAsync(async () => {
        await store.fetch(0, 'chart.gettopartists', 3);
        await store.fetch(1, 'chart.gettoptracks', 5);
        await store.fetch(2, 'chart.gettoptags', 5);
    }, []);

    return <>
        {store.meta === 'loading' && <div className={styles['home-loading']}>
            <div className={styles['home-loading__ring']}/>
        </div> }
        {store.meta === 'success' && <div className={styles['home-content']}>
            <HomeArtists data={artistsData}/>
            <HomeSongs data={songsData}/>
            <HomeTags data={tagsData}/>
        </div>}
    </>
}

export default observer(Home);