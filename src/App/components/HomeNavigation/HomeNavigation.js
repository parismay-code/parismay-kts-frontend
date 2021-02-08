import cn from 'classnames';
import {Link} from 'react-router-dom';

import data from "../../store/data";

import './HomeNavigation.scss';

const HomeNavigation = (props) => {
    return (
        <div className='navigation'>
            <ul className='navigation-list'>
                {
                    Object.keys(data).map((el, key) => {
                        return (
                            <Link
                                to={`/home/${el}`}
                                key={key}
                                className={cn('navigation-list__element', props.currentContent === el && 'navigation-list__element_active')}
                                onClick={() => props.setCurrentContent(el)}
                            >
                                Top 50 {el}
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default HomeNavigation;