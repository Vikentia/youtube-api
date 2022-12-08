import { VideoType } from "../../api/instance";

export const SET_VIDEOS = 'SET_VIDEOS'

export const setVideos = (value: string, videos: VideoType[]) => {
    return { type: SET_VIDEOS, payload: { value, videos } } as const;
}

//types
export type GetVideosActionType = ReturnType<typeof setVideos>
