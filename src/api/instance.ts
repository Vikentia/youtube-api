import axios from 'axios';
// import { Nullable } from '../components/Characters';
// import { CharacterType } from '../components/Character';


export const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    // withCredentials:true, //браузер отправляет куки вместе с запросом
    //     headers: {
    //         'API-KEY':'',
    //         Authorization: ''
    //  }
})

export type OrderType = 'date' | 'rating' | 'relevance' | 'videoCount' | 'viewCount'

export type VideoType = {
    "kind": string,
    "etag": string,
    "id": {
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
        "thumbnails": any,
        //   {
        //     (key): {
        //       "url": string,
        //       "width": number,
        //       "height": number
        //     }
        //   },
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


export const apiYouTube = {
    getVideos(value: string, maxResults = 12, order: OrderType) {
        let obj = {
            params: {
                part: "snippet",
                type: "video",
                maxResults: maxResults,
                order: "relevance",
                q: value,
                key: 'AIzaSyD3NtVEz2D0_f_1bcilE2YmKaQYO0pUEdk',
            }
        };
return instance
    .get<ResponseType>('search', obj)
    .then((res => console.log(res.data.items)))
    },
}
