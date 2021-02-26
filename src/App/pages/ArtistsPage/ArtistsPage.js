import * as React from 'react';
import {useParams} from 'react-router-dom';
import {useAsync} from "@utils/hooks/useAsync";
import {observer} from "mobx-react-lite";

import ArtistsCard from "@components/ArtistsCard";
import ArtistsSearch from "@components/ArtistsSearch";

import styles from './ArtistsPage.module.scss';

const ArtistsPage = ({store}) => {
    const {name} = useParams();

    useAsync(async () => {
        if (name !== 'search') {
            await store.fetchArtistInfo(0, 'artist.getinfo', name);
            await store.fetchArtistInfo(1, 'artist.gettoptracks', name);
        } else await store.fetch(0, 'chart.gettopartists', 119);
    }, [name]);

    return <>
        {store.meta === 'loading' && <div className={styles['artists-page-loading']}>
            <div className={styles['artists-page-loading__ring']}/>
        </div> }
        {store.meta === 'success' && <div className={styles['artists-page']}>
            {name !== 'search' ? <ArtistsCard data={store.artistInfo} tracks={store.artistTracks}/> :
                <ArtistsSearch data={store.artistsData}/>}
        </div>}
    </>
}

export default observer(ArtistsPage);