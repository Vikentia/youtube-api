
import { ResponseType } from "../../api/instance";


export const SET_VIDEOS = 'SET_VIDEOS'


export const setVideos = (videos: ResponseType) => {
    return { type: SET_VIDEOS, payload: { videos } } as const;
}

//types
export type GetVideosActionType = ReturnType<typeof setVideos>
