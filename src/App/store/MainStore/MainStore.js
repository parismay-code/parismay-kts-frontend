import {
    action,
    makeObservable,
    observable,
    runInAction,
} from "mobx";

import {
    requestLastFmData,
    requestLastFmArtistInfo,
    requestMBArtistImage
} from "./requestLastFmData";

import {Meta} from '@utils/meta';

export default class MainStore {
    artistsData = [];
    songsData = [];
    tagsData = [];

    artistInfo = [];
    artistTracks = [];
    artistImage = null;

    meta = Meta.initial;

    constructor() {
        makeObservable(this, {
            artistsData: observable,
            songsData: observable,
            tagsData: observable,

            artistInfo: observable,
            artistTracks: observable,
            artistImage: observable,

            meta: observable,

            fetch: action.bound,
            fetchArtistInfo: action.bound,
            fetchArtistImage: action.bound
        })
    }

    async fetchArtistInfo(type, method, MBId) {
        this.meta = Meta.loading;

        const {isError, data} = await requestLastFmArtistInfo(method, MBId);
        if (isError) {
            return this.meta = Meta.error;
        }

        runInAction(() => {
            this.meta = Meta.success;

            switch (type) {
                case 0:
                    return this.artistInfo = data;
                default:
                    return this.artistTracks = data;
            }
        })
    }

    async fetch(type, method, limit) {
        this.meta = Meta.loading;

        const {isError, data} = await requestLastFmData(method, limit);
        if (isError) {
            return this.meta = Meta.error;
        }

        runInAction(() => {
            this.meta = Meta.success;

            switch(type) {
                case 0:
                    this.artistsData = data;
                    break;
                case 1:
                    this.songsData = data;
                    break;
                default:
                    this.tagsData = data;
                    break;
            }
        })
    }

    async fetchArtistImage(MBId) {
        this.artistImage = null;
        this.meta = Meta.loading;

        const {isError, imageUrl} = await requestMBArtistImage(MBId);
        if (isError) {
            return this.meta = Meta.error;
        }

        runInAction(() => {
            this.meta = Meta.success;
            this.artistImage = imageUrl;
        })
    }

    destroy() {}
}