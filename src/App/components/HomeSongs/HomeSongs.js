import * as React from 'react';
import {observer} from "mobx-react-lite";

import HomeSongsCard from "@components/HomeSongsCard";

import styles from './HomeSongs.module.scss';

const HomeSongs = ({ data }) => {
    return <div className={styles['content']}>
        <div className={styles['content__header']}>
            Top 5 tracks
        </div>
        <div className={styles['content__inner']}>
            {data.tracks?.track.map((el, key) => {
                return <HomeSongsCard
                    key={key}
                    artistName={el.artist.name}
                    artistMBId={el.artist.mbid}
                    trackName={el.name}
                    listeners={el.listeners}
                    playCount={el.playcount}
                />
            })}
        </div>
    </div>
}

export default observer(HomeSongs);
