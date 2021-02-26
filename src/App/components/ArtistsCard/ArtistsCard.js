import * as React from 'react';
import {observer} from "mobx-react-lite";

import {regExp} from "@utils/regExp";

import styles from './ArtistsCard.module.scss';

const ArtistsCard = ({data, tracks}) => {
    const listeners = React.useMemo(() =>
        data.artist?.stats.listeners.replace(regExp.number, ' '), [data.artist?.stats.listeners]);
    const playCount = React.useMemo(() =>
        data.artist?.stats.playcount.replace(regExp.number, ' '), [data.artist?.stats.playcount]);

    return <div className={styles['artists-card']}>
        <div className={styles['artists-card-info']}>
            <div className={styles['artists-card-info__image']}>No image</div>
            <div className={styles['artists-card-info-main']}>
                <div className={styles['artists-card-info-main__name']}>{data.artist?.name}</div>
                <div className={styles['artists-card-info-main-stats']}>
                    <div className={styles['artists-card-info-main-stats__listeners']}>
                        <b>Listening now:</b> {listeners}
                    </div>
                    <div className={styles['artists-card-info-main-stats__play-count']}>
                        <b>Play count:</b> {playCount}
                    </div>
                </div>
            </div>
        </div>
        <div className={styles['artists-card-tags']}>
            {data.artist?.tags.tag.map((el, key) => {
                return <div key={key} className={styles['artists-card-tags__element']}>#{el.name}</div>
            })}
        </div>
        <div className={styles['artists-card-similar']}>
            <div className={styles['artists-card-similar__header']}>
                Similar artists
            </div>
            <div className={styles['artists-card-similar-content']}>
                {data.artist?.similar.artist.map((el, key) => {
                    return <a
                        key={key}
                        href={el.url}
                        target='_blank'
                        rel='noreferrer'
                        className={styles['artists-card-similar-content__element']}
                    >
                        {el.name}
                    </a>
                })}
            </div>
        </div>
        <div className={styles['artists-card-tracks']}>
            <div className={styles['artists-card-tracks__title']}>Artist's Tracks:</div>
            <div className={styles['artists-card-tracks-content']}>
                {tracks.toptracks?.track.map((el, key) => {
                    return <div key={key} className={styles['artists-card-tracks-content__element']}>
                        {el.name}
                    </div>
                })}
            </div>

        </div>
    </div>
}

export default observer(ArtistsCard);