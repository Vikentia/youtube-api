import axios from 'axios';
import { setVideos } from '../redux/actions/videosAction';
import { useAppDispatch } from '../redux/store';

const KEY = 'AIzaSyD3NtVEz2D0_f_1bcilE2YmKaQYO0pUEdk';

export const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    // withCredentials:true, //браузер отправляет куки вместе с запросом
    //     headers: {
    //         'API-KEY':'',
    //         Authorization: ''
    //  }
})

export const apiYouTube = {
    getVideos(value: string, maxResults = 12, order: OrderType = "relevance") {
        let obj = {
            params: {
                part: "snippet",
                type: "video",
                maxResults: maxResults,
                order: order,
                q: value,
                key: KEY,
            }
        };
        return instance
            .get<ResponseType>('search', obj)
            .then((res => res.data.items))
    },
}



//types

export type OrderType = 'date' | 'rating' | 'relevance' | 'videoCount' | 'viewCount'

type ThumbnailsType = {
    "url": string,
    "width": number,
    "height": number
}

export type VideoType = {
    "kind": string,
    "etag": string,
    "id"?: {
        "kind": string,
        "videoId": string,
        "channelId": string,
        "playlistId": string
    },
    "snippet": {
        "publishedAt": string,
        "channelId": string,
        "title": string,
        "description": string,
        "thumbnails": {
            "default": ThumbnailsType,
            "medium": ThumbnailsType,
            "high": ThumbnailsType,
        },
        "channelTitle": string,
        "liveBroadcastContent": string
    }
}

export type ResponseType = {
    "kind": string,
    "etag": string,
    "nextPageToken": string,
    "prevPageToken": string,
    "regionCode": string,
    "pageInfo": {
        "totalResults": number,
        "resultsPerPage": number
    },
    "items": VideoType[]
}
