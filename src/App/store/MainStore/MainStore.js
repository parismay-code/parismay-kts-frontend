import {
    action,
    makeObservable,
    observable,
    runInAction,
} from "mobx";

import {
    requestLastFmData,
    requestMBArtistImage
} from "./requestLastFmData";

export default class MainStore {
    data = [];
    artistImage = null;

    constructor() {
        makeObservable(this, {
            data: observable,
            artistImage: observable,

            fetch: action.bound,
            fetchArtistImage: action.bound
        })
    }

    async fetch(method, limit) {
        this.data = [];

        const { isError, data } = await requestLastFmData(method, limit);
        if (isError) {
            console.log('error');
            return;
        }

        runInAction(() => {
            this.data = data;
        })
    }

    async fetchArtistImage(MBId) {
        this.artistImage = null;

        const { isError, imageUrl } = await requestMBArtistImage(MBId);
        if (isError) {
            console.log('error');
            return;
        }

        runInAction(() => {
            this.artistImage = imageUrl;
        })
    }

    destroy() {}
}