import { TOGGLE_ADD } from '../actions';

const initialState = {
    isAddingTask: false,
}

export const adminReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_ADD:
            return {
                addingTask: !state.isAddingTask
            };
        default:
            return state
    }
}