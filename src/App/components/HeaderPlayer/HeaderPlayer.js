import albumLogo from '@assets/images/albumPlaceholder.jpg';
import prev from '@assets/images/prev.svg';
import pause from '@assets/images/pause.svg';
import next from '@assets/images/next.svg';

import styles from './HeaderPlayer.module.scss';

const HeaderPlayer = () => {
    return <div className={styles['header-player']}>
        <img src={albumLogo} alt='#' className={styles['header-player__thumb']}/>
        <div className={styles['header-player-track']}>
            <div className={styles['header-player-track-info']}>
                <span className={styles['header-player-track-info__name']}>Прорубь</span>
                <span className={styles['header-player-track-info__artist']}>Loqiemean</span>
            </div>
            <div className={styles['header-player-track-player']}>
                <span>2:13</span>
                <img className={styles['header-player-track-player__prev']} src={prev} alt='#' />
                <img className={styles['header-player-track-player__pause']} src={pause} alt='#' />
                <img className={styles['header-player-track-player__next']} src={next} alt='#' />
                <span>3:35</span>
                <div className={styles['header-player-track-player__bar']}/>
            </div>
        </div>
    </div>
}

export default HeaderPlayer;