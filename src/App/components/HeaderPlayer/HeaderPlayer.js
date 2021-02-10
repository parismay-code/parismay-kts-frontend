import albumLogo from '../../assets/images/albumPlaceholder.jpg';
import prev from '../../assets/images/prev.svg';
import pause from '../../assets/images/pause.svg';
import next from '../../assets/images/next.svg';

import styles from './HeaderPlayer.module.scss';

const HeaderPlayer = () => {
    return <div className={styles.headerPlayer}>
        <img src={albumLogo} alt='#' className={styles.headerPlayer__thumb}/>
        <div className={styles.headerPlayer__track}>
            <div className={styles.headerPlayer__trackInfo}>
                <span className={styles.headerPlayer__trackName}>Прорубь</span>
                <span className={styles.headerPlayer__artist}>Loqiemean</span>
            </div>
            <div className={styles.headerPlayer__player}>
                <span>2:13</span>
                <img className={styles.headerPlayer__prev} src={prev} />
                <img className={styles.headerPlayer__pause} src={pause} />
                <img className={styles.headerPlayer__next} src={next} />
                <span>3:35</span>
                <div className={styles.headerPlayer__bar}/>
            </div>
        </div>
    </div>
}

export default HeaderPlayer;