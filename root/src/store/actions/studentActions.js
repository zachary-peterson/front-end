import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_VOLUNTEERS = 'FETCH_VOLUNTEERS';
export const FETCH_VOLUNTEERS_RES = 'FETCH_VOLUNTEERS_RES';
export const FETCH_VOLUNTEERS_ERR = 'FETCH_VOLUNTEERS_ERR';
export const TOGGLE_ARTICLE_VIEW = 'TOGGLE_ARTICLE_VIEW';
export const TOGGLE_MAIN_VIEW = 'TOGGLE_MAIN_VIEW'

export const fetchAllMembers = () => (dispatch) => {
    dispatch({ type: FETCH_VOLUNTEERS })

    axiosWithAuth().get('api/users')
    .then(res => {
        // console.log(res);

        // debugger

        dispatch({ type: FETCH_VOLUNTEERS_RES, payload: res.data.data })
    })
    .catch(err => {
        // console.dir(err)
        dispatch({ type: FETCH_VOLUNTEERS_ERR, payload: err.message})
    })
}

export const fetchVolunteers = () => (dispatch) => {
    dispatch({ type: FETCH_VOLUNTEERS })

    axiosWithAuth().get('api/users/filter?role=volunteer')
    .then(res => {
        // console.log(res);

        dispatch({ type: FETCH_VOLUNTEERS_RES, payload: res.data.data })
    })
    .catch(err => {
        // console.dir(err)
        dispatch({ type: FETCH_VOLUNTEERS_ERR, payload: err })
    })
}