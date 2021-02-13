import * as React from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import {useLocation} from 'react-router-dom';

import HeaderPlayer from "@components/HeaderPlayer";

import routes from "@configs/routes";

import logo from '@assets/images/logo.svg';

import styles from './Header.module.scss';

const Header = () => {
    const location = useLocation();

    return (
        <div className={styles['header']}>
            <img src={logo} alt='NLRG' className={styles['header__logo']}/>
            <Link
                to={routes.home.index}
                className={cn(styles['header__element'],
                    location.pathname === routes.home.index && styles['header__element_active'])}
            >Home
            </Link>
            <Link
                to={routes.artists.index}
                className={cn(styles['header__element'],
                    location.pathname === routes.artists.index && styles['header__element_active'])}
            >Artists
            </Link>
            <Link
                to={routes.tags.index}
                className={cn(styles['header__element'],
                    location.pathname === routes.tags.index && styles['header__element_active'])}
            >Tags
            </Link>
            <HeaderPlayer/>
        </div>
    )
}

export default Header;