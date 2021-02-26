import * as React from 'react';
import {observer} from "mobx-react-lite";
import {useLocalStore} from "../../utils/hooks/useLocal";
import {useAsync} from "../../utils/hooks/useAsync";

import MainStore from "@store/MainStore";

import HomeArtists from "@components/HomeArtists";
import HomeSongs from "@components/HomeSongs";
import HomeTags from "@components/HomeTags";

import styles from './Home.module.scss';

const Home = () => {
    const [isLoading, setLoading] = React.useState(true);

    const store = useLocalStore(() => new MainStore());

    const artistsData = React.useMemo(() => store.data, [store.data]);

    useAsync(async () => {
        await store.fetch('chart.gettopartists', 3);
        setLoading(false);
    });

    return <>
        {isLoading && <div className={styles['home-loading']}>
            <div className={styles['home-loading__ring']}/>
        </div>}
        {!isLoading && <div className={styles['home-content']}>
            <HomeArtists store={store} data={artistsData}/>
            <HomeSongs/>
            <HomeTags/>
        </div>}
    </>
}

export default observer(Home);