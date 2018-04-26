
import * as _t from '../actions/types.js';

const githubData = (state = {}, action) => {
  switch (action.type) {

      case _t.GET_DATA_FROM_GITHUB: {
        return {...action.payload};
      }

      default: {
        return state;
      }
    }
  };

export default githubData;
