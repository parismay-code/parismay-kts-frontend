import * as React from 'react';
import {observer} from "mobx-react-lite";

import HomeArtistCard from "@components/HomeArtistCard";

import styles from './HomeArtists.module.scss';

const HomeArtists = ({ data }) => {
    return <div className={styles['content']}>
        <div className={styles['content__header']}>
            Top 3 artists
        </div>
        <div className={styles['content__inner']}>
            {data.artists?.artist.map((el, key) => {
                return <HomeArtistCard
                    key={key}
                    name={el.name}
                    listeners={el.listeners}
                    MBId={el.mbid}
                />
            })}
        </div>
    </div>
}

export default observer(HomeArtists);