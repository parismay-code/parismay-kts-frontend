import './topCard.scss';

const HomeCard = (props) => {
    return (
        <div className='home-page-card'>
            {
                props.thumb ?
                    <img
                        className='home-page-card__img'
                        src={props.thumb}
                        alt={props.title}
                    /> :
                    <div className='home-page-card__img' />
            }
            <span className='home-page-card__title'>{props.title}</span>
            <span className='home-page-card__subtitle'>{props.subtitle}</span>
        </div>
    )
}

export default HomeCard;