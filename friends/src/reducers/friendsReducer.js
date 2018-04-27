import {FETCHING_FRIENDS, FETCHED_FRIENDS, FETCH_ERROR} from '../actions';

const initialState = {
  fetching: false,
  friends: [],
  error: null
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, {fetching: true });
       case FETCH_ERROR:
      return Object.assign({}, state, {fetching: false, error: action.error });
       case FETCHED_FRIENDS:
      return Object.assign({}, state, {
        fetching: false,
        friends: action.payload});
      default:
      return state;
  }
}

export default friendsReducer;
 
       