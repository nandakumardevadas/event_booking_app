import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { EVENT_LIST } from '../actions';
import eventService from '../services/eventService';

export const eventEpic = action$ =>
  action$.pipe(ofType(EVENT_LIST), mergeMap(eventService(action$)));


// import { ofType } from 'redux-observable';
// import { delay, mapTo } from 'rxjs/operators';
// import { of } from 'rxjs'

// const epicRedirect = () => (
//     { type: EVENT_LIST, payload: { "test": "oksss" } }
// );


// export const eventEpic = action$ => action$.pipe(
//     ofType(EVENT_DETAILS),
//     delay(1000),
//     mapTo(epicRedirect())
// );