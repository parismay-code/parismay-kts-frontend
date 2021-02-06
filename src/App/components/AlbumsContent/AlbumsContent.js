import HomeCard from "../HomeCard";

import data from "../../store/data";

import './AlbumsContent.scss';

const AlbumsContent = () => {
    return data.albums.map((el, key) => {
        return (
            <HomeCard
                key={key}
                thumb={el.thumb}
                description={el.description}
                title={el.title}
                subtitle={el.subtitle}
            />
        )
    })
}

export default AlbumsContent;