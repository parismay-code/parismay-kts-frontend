import * as React from 'react';

import getArtistsData from "../../store/getArtistsData";
import getSongsData from "../../store/getSongsData";
import getTagsData from "../../store/getTagsData";

const HomeHOC = (Component) => {
    const ProcessedComponent = (props) => {
        const [isLoading, setIsLoading] = React.useState(true);
        const [artistsData, setArtistsData] = React.useState();
        const [songsData, setSongsData] = React.useState();
        const [tagsData, setTagsData] = React.useState();

        React.useEffect(async () => {
            await getArtistsData(3, setArtistsData);
            await getSongsData(3, setSongsData);
            await getTagsData(3, setTagsData);

            setIsLoading(false);

            return () => setIsLoading(true);
        }, [])

        return <Component
            {...props}
            isLoading={isLoading}
            artistsData={artistsData}
            songsData={songsData}
            tagsData={tagsData}
        />
    }

    return ProcessedComponent;
}

export default HomeHOC;