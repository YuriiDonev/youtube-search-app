import youtube from 'youtube-finder';
import { GET_YOUTUBE_VIDEO, SET_MOVIE_ID } from './types.js';
import { APIkey } from '../youtube/APIkey.js';

export const getVideosFromYouTube = keyword => async dispatch => {
  try {
    const client = youtube.createClient({ key: APIkey});
    const params = {
      part: 'snippet',
      q: keyword,
      type: 'video',
      maxResults: 10
    }
    await client.search(params, function (err, data) {
      dispatch({
        type: GET_YOUTUBE_VIDEO,
        payload: data.items,
      });
    });
  } catch (err) {
    console.error('youtube error', err);
  }
};

export const setMovieID = id => ({
  type: SET_MOVIE_ID,
  payload: id,
});
