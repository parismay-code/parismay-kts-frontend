export const API_KEY = '17108eb4b06d23334fdb6f5044fa8a88';

export const apiUrls = {
    lastFm: {
        lastFmApi: 'http://ws.audioscrobbler.com/2.0/',
    },
    MB: {
        MBApi: (MBId) => `https://musicbrainz.org/ws/2/artist/${MBId}/?inc=url-rels&fmt=json`,
    },
}