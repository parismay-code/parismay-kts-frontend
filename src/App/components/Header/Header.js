import * as React from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import {useLocation} from 'react-router-dom';

import HeaderPlayer from "../HeaderPlayer";

import routes from "../../configs/routes";

import logo from '../../assets/images/logo.svg';

import styles from './Header.module.scss';

const Header = () => {
    const location = useLocation();

    return (
        <div className={styles.header}>
            <img src={logo} alt='NLRG' className={styles.header__logo}/>
            {routes.map((el, key) => {
                return <Link
                    key={key}
                    to={el.index}
                    className={cn(styles.header__element,
                        location.pathname === el.index && styles.header__elementActive)}
                >
                    {el.name}
                </Link>
            })}
            <HeaderPlayer/>
        </div>
    )
}

export default Header;