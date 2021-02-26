import * as React from 'react';

import {regExp} from "@utils/regExp";

import styles from './HomeTagsCard.module.scss';

const HomeSongsCard = ({ name, reach, tags }) => {
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fade = setTimeout(() => setLoading(false), 400);

        return () => clearTimeout(fade);
    }, [])

    const _reach = React.useMemo(() => reach.replace(regExp.number, ' '), [reach]);
    const _tags = React.useMemo(() => tags.replace(regExp.number, ' '), [tags]);

    return <div className={styles[isLoading ? 'home-tags_hidden' : 'home-tags']}>
        <div className={styles['home-tags__name']}>#{name}</div>
        <div className={styles['home-tags-description']}>
            <div className={styles['home-tags-description__reach']}><b>Reach:</b> {_reach}</div>
            <div className={styles['home-tags-description__tags']}><b>Tags:</b> {_tags}</div>
        </div>
    </div>
}

export default React.memo(HomeSongsCard);