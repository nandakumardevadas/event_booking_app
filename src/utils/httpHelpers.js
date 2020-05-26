import { ajax } from 'rxjs/ajax';
import { map, catchError, takeUntil } from 'rxjs/operators';
import { ENV } from '../constants/environment';

const Endpoint = endpoint => {
    return `${ENV.BASE_URL}${endpoint}`;
};

export const FORM_HEADERS = {};

export const HTTP = {
    GET: (URL, Headers, ResponseCb, ErrorCb, isAbsoluteURL) =>
        ajax
            .getJSON(Endpoint(URL, isAbsoluteURL), Headers)
            .pipe(map(ResponseCb), catchError(ErrorCb)),
    GET_WITH_CANCEL: (
        URL,
        Headers,
        ResponseCb,
        ErrorCb,
        cancelUntil,
        isAbsoluteURL,
    ) =>
        ajax
            .getJSON(Endpoint(URL, isAbsoluteURL), Headers)
            .pipe(map(ResponseCb), takeUntil(cancelUntil), catchError(ErrorCb)),
    POST: (URL, Body, Headers, ResponseCb, ErrorCb, isAbsoluteURL) =>
        ajax
            .post(Endpoint(URL, isAbsoluteURL), Body, Headers)
            .pipe(map(ResponseCb), catchError(ErrorCb)),
    POST_WITH_CANCEL: (URL, Body, Headers, ResponseCb, ErrorCb, cancelUntil, isAbsoluteURL) =>
        ajax
            .post(Endpoint(URL, isAbsoluteURL), Body, Headers)
            .pipe(map(ResponseCb), takeUntil(cancelUntil), catchError(ErrorCb)),
    PUT: (URL, Body, Headers, ResponseCb, ErrorCb) =>
        ajax
            .put(Endpoint(URL), Body, Headers)
            .pipe(map(ResponseCb), catchError(ErrorCb)),
};

export const SUCCESS_RESPONSE = response => response;

export const ERROR_RESPONSE = response => ({
    data: null,
    serverError: response ? response.response : '',
});
