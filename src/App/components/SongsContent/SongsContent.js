import HomeCard from "../HomeCard";

import data from "../../store/data";

import './SongsContent.scss';

const SongsContent = () => {
    return data.songs.map((el, key) => {
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

export default SongsContent;