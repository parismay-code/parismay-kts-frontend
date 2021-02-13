const getArtistImage = async (mbid) => {
    if (mbid) {
        const url = `https://musicbrainz.org/ws/2/artist/${mbid}?inc=url-rels&fmt=json`;

        fetch(url).then(response => response.json())
            .then(out => {
                const relations = out.relations;
                for (let i = 0; i < relations.length; i++) {
                    if (relations[i].type === 'image') {
                        let imageUrl = relations[i].url.resource;
                        if (imageUrl.startsWith('https://commons.wikimedia.org/wiki/File:')) {
                            const fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
                            imageUrl = `https://commons.wikimedia.org/wiki/Special:Redirect/file/${fileName}`;
                        }

                        return imageUrl;
                    }
                }
            })
    }
}

export default getArtistImage;