import { ADD_PROJECTS, GET_PROJECTS } from '../actions/types';

const initialState = {
    projects: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
            }
        case ADD_PROJECTS:
            return {
                ...state, 
                projects: [...state.projects, action.payload]
            }
        default: 
            return state;
    }
}