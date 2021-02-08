import HomeCard from "../HomeCard";

import data from "../../store/data";

import './ArtistsContent.scss';

const ArtistsContent = () => {
    return data.artists.map((el, key) => {
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

export default ArtistsContent;