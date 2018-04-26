
import * as _t from './types.js';
import { getDataFromGitHubEnd } from '../API/endPoint.js';

export const getDataFromGitHub = user => async dispatch => {
  try {
    const githubData = await getDataFromGitHubEnd(user);
    dispatch({
      type: _t.GET_DATA_FROM_GITHUB,
      payload: githubData
    });
  } catch (err) {
    console.error(err);
  }
};
