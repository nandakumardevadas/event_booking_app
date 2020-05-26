import { EVENT_LIST_SUCCESS } from '../actions';

const initialState = {
    events: [],
    isLoading: true,
    isError: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EVENT_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                events: action.payload
            }

        default:
            return state;
    }
}