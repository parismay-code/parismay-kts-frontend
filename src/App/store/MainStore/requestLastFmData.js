import axios from 'axios';

import { apiUrls, API_KEY } from "@configs/apiUrl";
import {normalizeMBArtistImageApi} from "@store/normalizedData/MB/MBArtistImageApi";


/**
 * @param method - список методов: https://www.last.fm/api
 * @param limit - количество результатов на странице, страниц по дефолту - 1
 */
export const requestLastFmData = async (method, limit) => {
    try {
        const response = await axios.get(
            apiUrls.lastFm.lastFmApi,
            {
                params: {
                    method: method,
                    limit: limit,
                    api_key: API_KEY,
                    format: 'json'
                }
            }
        );
        return {
            isError: false,
            data: response.data
        };
    } catch (e) {
        console.log(e);
        return {
            isError: true,
            data: null
        }
    }
}

/**
 * @param MBId - artist ID on https://musicbrainz.org/
 * @returns url of artist image
 */
export const requestMBArtistImage = async (MBId) => {
    try {
        const response = await axios.get(apiUrls.MB.MBApi(MBId));
        return {
            isError: false,
            imageUrl: normalizeMBArtistImageApi(response.data)
        }
    } catch (e) {
        console.log(e);
        return {
            isError: true,
            imageUrl: null
        }
    }
}