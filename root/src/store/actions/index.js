import storage from 'redux-persist/lib/storage';


export { 
    FETCH_TASKS,
    FETCH_TASKS_RES,
    FETCH_TASKS_ERR,
    ADD_RES,
    SET_MEMBER_ID,
    SET_EDITING,
    LOADNG_RES,
    fetchTasks,
    addTask,
    deleteTask,
    setMemberID,
    setEditing,
    deleteMember,
    setLoading,
    loadingRes,
    setErrors
} from './signInActions'

export {
    FETCH_VOLUNTEERS,
    FETCH_VOLUNTEERS_RES,
    FETCH_VOLUNTEERS_ERR,
    fetchVolunteers
}from './studentActions'

    export const TOGGLE_LANDING = 'TOGGLE_LANDING';
    export const SET_ADMIN = 'SET_ADMIN';
    export const SET_STUDENT = 'SET_STUDENT';
    export const SET_VOLUNTEER = 'SET_VOLUNTEER';
    export const TOGGLE_ADD = 'TOGGLE_ADD';
    export const CLEAR_STORAGE = 'CLEAR_STORAGE'
    export const CLEAR_STATE = 'CLEAR_STATE';
    export const TOGGLE_MEMBER_VIEW = 'TOGGLE_MEMBER_VIEW';
    export const TOGGLE_TASK_VIEW = 'TOGGLE_TASK_VIEW'

    export const toggleLanding = () => (dispatch) => {
        dispatch({ type: TOGGLE_LANDING })
    }

    export const setAdmin = () => (dispatch) => {
        dispatch({ type: SET_ADMIN })
    }

    export const setStudent = () => (dispatch) => {
        dispatch({ type: SET_STUDENT })
    }

    export const setVolunteer = () => (dispatch) => {
        dispatch({ type: SET_VOLUNTEER })
    }

    export const toggleAdd = () => (dispatch) => {
        dispatch({ type: TOGGLE_ADD })
    }

    export const clearStorage = () => (dispatch) => {
        storage.removeItem('persist:root');
        dispatch({ type: CLEAR_STORAGE })
    }

    export const clearState = () => (dispatch) => {
        localStorage.clear()
        dispatch({ type: CLEAR_STATE })
    }

    export const toggleViewMember = () => (dispatch) => {
        dispatch({ type: TOGGLE_MEMBER_VIEW })
    }

    export const toggleViewTasks = () => (dispatch) => {
        dispatch({ type: TOGGLE_TASK_VIEW })
    }