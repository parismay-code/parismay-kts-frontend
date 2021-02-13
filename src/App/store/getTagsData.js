import axios from "axios";

const getTagsData = async (limit, event) => {
    await axios({
        method: 'get',
        url: `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&limit=${limit}&api_key=17108eb4b06d23334fdb6f5044fa8a88&format=json`
    }).then(response => event(response.data.tags.tag))
}

export default getTagsData;