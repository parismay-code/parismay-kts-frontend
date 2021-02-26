export const normalizeMBArtistImageApi = (data) => {
    const relations = data.relations;

    for (let res of relations) {
        if (res.type === 'image') {
            let imageUrl = res.url.resource;
            if (imageUrl.startsWith('https://commons.wikimedia.org/wiki/File:')) {
                const fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
                imageUrl = `https://commons.wikimedia.org/wiki/Special:Redirect/file/${fileName}`;
            }

            return imageUrl;
        }
    }
}