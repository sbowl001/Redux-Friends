import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const getFriends = () => {
    return(dispatch) => {
        axios.get("http://localhost:5000/api/friends").then(response => {
          dispatch({ type: FETCHED_FRIENDS, payload: response.data})
        //   .catch( error => {
        //       dispatch({ type: FETCH_ERROR, error: "Error fetching friends"})
        //   })
        });
    }
}

export const createAvenger = () => {

}