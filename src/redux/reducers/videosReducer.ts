import { request } from 'http';
import { apiYouTube, OrderType, VideoType } from '../../api/instance';
import { GetVideosActionType, setVideos, SET_VIDEOS } from '../actions/videosAction';
import { AppThunk } from '../store';


const initialState = {
    requests: [] as RequestWithResultsType[]
}

type RequestWithResultsType = {
    'value': string,
    'videos': VideoType[]
}

export const videosReducer = (state = initialState, action: VideosActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_VIDEOS:
            return {
                ...state, requests: [...state.requests, { 'value': action.payload.value, 'videos': action.payload.videos }]
            }
        default:
            return state;
    }
}

export const getVideosTC = (value: string, maxResults: number = 12, order: OrderType = 'relevance'): AppThunk => {
    return (dispatch) => {
        apiYouTube.getVideos(value, maxResults, order)
            // .then(arrayResult => console.log(arrayResult))
            .then(arrayResult => dispatch(setVideos(value, arrayResult)));
    }
}

//types
type InitialStateType = typeof initialState
export type VideosActionTypes = GetVideosActionType