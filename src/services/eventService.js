import { EVENT_LIST, EVENT_LIST_SUCCESS, EVENT_LIST_FAILED } from '../actions';
import { ENV } from '../constants/environment';
import {
    HTTP,
    FORM_HEADERS,
    SUCCESS_RESPONSE,
    ERROR_RESPONSE,
} from '../utils/httpHelpers';
import { of } from 'rxjs';

const onSuccess = response => {
    return {
        type: EVENT_LIST_SUCCESS,
        payload: SUCCESS_RESPONSE(response),
    };
};

const onError = error => {
    return of({
        type: EVENT_LIST_FAILED,
        payload: ERROR_RESPONSE(error),
    });
};

const eventService = action$ => action => {
    switch (action.type) {
        case EVENT_LIST:
            return HTTP.GET(ENV.EVENT_LIST_URL, FORM_HEADERS, onSuccess, onError);
        default:
            return false;
    }
}

export default eventService;