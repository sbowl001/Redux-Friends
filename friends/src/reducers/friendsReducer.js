import {FETCHING_FRIENDS, FETCHED_FRIENDS, FETCH_ERROR} from '../actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, {fetching: true });
       case FETCH_ERROR:
      return Object.assign({}, state, {fetching: false, error: action.error });
       case FETCHED_FRIENDS:
      return Object.assign({}, state, {
        fetching: false,
        friends: state.friends.concat(action.friends)});
      default:
      return state;
  }
}

 
       