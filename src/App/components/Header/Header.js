import './Header.scss'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='header-container'>
                <div className='header-container__logo'>NLRG</div>
                <nav className='header-container-navigation'>
                    <ul className='header-container-navigation-list'>
                        <Link to='/' className='header-container-navigation-list__element'>
                            Home
                        </Link>
                        <Link to='/artists' className='header-container-navigation-list__element'>
                            Artists
                        </Link>
                        <Link to='/contacts' className='header-container-navigation-list__element'>
                            Contacts
                        </Link>
                    </ul>
                    <div className='header-container-navigation__slider'/>
                </nav>
        </div>
    )
}

export default Header;