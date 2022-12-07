import { apiYouTube, VideoType } from '../../api/instance';
import { GetVideosActionType, SET_VIDEOS } from '../actions/videosAction';


const initialState = {
    videos: [] as VideoType[]
}
export const videosReducer = (state = initialState, action: VideosActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_VIDEOS:
            // return { ...state, videos: action.payload.videos }
        default:
            return state;
    }
}

// export const getCharacters = (currentPage: number): AppThunk => {
//     return (dispatch) => {
//         apiYouTube.getVideos(value)
//             .then((res) => dispatch(setCharacters(res.data.results)));
//     }
// }

//types
type InitialStateType = typeof initialState // 
export type VideosActionTypes = GetVideosActionType