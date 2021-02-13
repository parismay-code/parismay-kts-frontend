import * as React from 'react';
import {useAsync} from "@utils/hooks/useAsync";

import styles from './HomeArtistCard.module.scss';
import {observer} from "mobx-react-lite";

const HomeArtistCard = ({ name, listeners, url, MBId, store }) => {
    const [thumb, setThumb] = React.useState();
    const [isLoading, setLoading] = React.useState(true);

    useAsync(async () => {
        if (MBId) await store.fetchArtistImage(MBId);
        setThumb(store.artistImage);
        setTimeout(() => setLoading(false), 400)
    });

    return <div className={styles[isLoading ? 'home-artist_hidden' : 'home-artist']}>
        <img className={styles['home-artist__image']} src={thumb} alt=''/>
        <div className={styles['home-artist-info']}>
            <span className={styles['home-artist-info__name']}>{name}</span>
            <span className={styles['home-artist-info__listeners']}><b>Listeners:</b> {listeners}</span>
            <a href={url} target='_blank' rel='noreferrer' className={styles['home-artist-info__url']}>View profile</a>
        </div>
    </div>
}

export default observer(HomeArtistCard);