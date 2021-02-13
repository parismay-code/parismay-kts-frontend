import * as React from 'react';
import {observer} from "mobx-react-lite";

import HomeArtistCard from "@components/HomeArtistCard";

import styles from './HomeArtists.module.scss';

const HomeArtists = ({ data, store }) => {
    return <div className={styles['content']}>
        <div className={styles['content__header']}>
            Top 3 artists
        </div>
        <div className={styles['content__inner']}>
            {data.artists.artist.map((el, key) => {
                return <HomeArtistCard
                    key={key}
                    name={el.name}
                    listeners={el.listeners}
                    url={el.url}
                    MBId={el.mbid}
                    store={store}
                />
            })}
        </div>
    </div>
}

export default observer(HomeArtists);
