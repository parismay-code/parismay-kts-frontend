import * as React from 'react';
import {Link} from "react-router-dom";

import routes from "@configs/routes";
import {regExp} from "@utils/regExp";

import styles from './HomeSongsCard.module.scss';

const HomeSongsCard = ({ artistName, artistMBId, trackName, listeners, playCount }) => {
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fade = setTimeout(() => setLoading(false), 400);

        return () => clearTimeout(fade);
    }, [])

    const _listeners = React.useMemo(() => listeners.replace(regExp.number, ' '), [listeners]);
    const _playCount = React.useMemo(() => playCount.replace(regExp.number, ' '), [playCount]);

    return <div className={styles[isLoading ? 'home-songs_hidden' : 'home-songs']}>
        <div className={styles['home-songs__name']}>{trackName}</div>
        <div className={styles['home-songs-description']}>
            <Link to={routes.artists.create(artistMBId)} className={styles['home-songs-description__artist']}>{artistName}</Link>
            <div className={styles['home-songs-description__play-count']}><b>Play count:</b> {_playCount}</div>
            <div className={styles['home-songs-description__listeners']}><b>Listening now:</b> {_listeners}</div>
        </div>
    </div>
}

export default React.memo(HomeSongsCard);