import axios from 'axios';
import { PATH_URL } from '../constants';

const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

function _request(user, body, method = 'GET', headers = defaultHeaders) {
  return new Promise((resolve, reject) => {
    axios({
      url: PATH_URL + user,
      method,
      data: body,
      headers
    }).then(response => {
        resolve(response.data);
      },
      error => {
        reject(error);
      })
    .catch(error => {
      reject(error);
    });
  });
};

export const getDataFromGitHubEnd = (user) => (
  _request(user)
);
