import * as React from 'react';
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

import routes from "@configs/routes";

import styles from './ArtistsSearch.module.scss';

const ArtistsSearch = ({ data }) => {
    return <div className={styles['artists-search']}>
        <div className={styles['artists-search__title']}>Choose your artists from the list:</div>
        <div className={styles['artists-search-list']}>
            {data.artists?.artist.filter(el => el.mbid).map((el, key) => {
                return <Link
                    to={routes.artists.create(el.mbid)}
                    key={key}
                    className={styles['artists-search-list__option']}
                >
                    {el.name}
                </Link>
            })}
        </div>
    </div>
}

export default observer(ArtistsSearch);