import './Phone.scss';

const Phone = () => {
    return (
        <div className='phone'>
            <div className='phone-header'>
                <div className='phone-header__camera' />
                <div className='phone-header__headphones' />
            </div>
            <div className='phone-screen'>
                <div className='phone-screen-message'>
                        <span className='phone-screen-message__text'>
                            Hey, did you hear the new album of your favourite artist?
                        </span>
                    <span className='phone-screen-message__text'>
                            LOL, click on the 'ARTISTS' and check it!
                        </span>
                </div>
            </div>
        </div>
    )
}

export default Phone;