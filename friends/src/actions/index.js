import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const getFriends = () => {
    return(dispatch) => {
        axios.get("http://localhost:5000/api/friends")
        .then(response => {
            setTimeout(() => {
              dispatch({
                type: FETCHED_FRIENDS,
                payload: response.data
              })}, 2000)
            })
         
          .catch( err => {
              dispatch({ type: FETCH_ERROR, error: "Error fetching friends"})
          })
        
    }
}

export const createFriend = (friend) => {
    return dispatch => {
        axios.post('http://localhost:5000/api/friends', friend)
        .then(response => {
            console.log(response)
        })
        .catch( ()=> {
            dispatch({type: FETCH_ERROR, error: 'ERROR creating Friend'})
        })
    }

}