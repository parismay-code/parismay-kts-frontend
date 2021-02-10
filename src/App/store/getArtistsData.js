import axios from "axios";

const getArtistsData = async (limit, event) => {
    await axios({
        method: 'get',
        url: `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=${limit}&api_key=17108eb4b06d23334fdb6f5044fa8a88&format=json`
    }).then(response => event(response.data.artists.artist))
}

export default getArtistsData;