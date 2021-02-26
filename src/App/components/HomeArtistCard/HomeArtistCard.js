import * as React from 'react';
import {Link} from "react-router-dom";

import routes from "@configs/routes";
import {regExp} from "@utils/regExp";

import styles from './HomeArtistCard.module.scss';

const HomeArtistCard = ({name, listeners, MBId}) => {
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fade = setTimeout(() => setLoading(false), 400);

        return () => clearTimeout(fade);
    }, [])

    const _listeners = React.useMemo(() => listeners.replace(regExp.number, ' '), [listeners]);

    return <div className={styles[isLoading ? 'home-artist_hidden' : 'home-artist']}>
        <div className={styles['home-artist__image_blank']}>no image</div>
        <div className={styles['home-artist-info']}>
            <span className={styles['home-artist-info__name']}>{name}</span>
            <span className={styles['home-artist-info__listeners']}><b>Listeners:</b> {_listeners}</span>
            <Link to={routes.artists.create(MBId)} className={styles['home-artist-info__url']}>View profile</Link>
        </div>
    </div>
}

export default React.memo(HomeArtistCard);