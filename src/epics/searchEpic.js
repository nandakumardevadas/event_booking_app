import { ofType } from 'redux-observable';
import { mergeMap,debounceTime } from 'rxjs/operators';
import { EVENT_SEARCH } from '../actions';
import searchService from '../services/searchService';

export const searchEpic = action$ =>
  action$.pipe(ofType(EVENT_SEARCH), debounceTime(1000), mergeMap(searchService(action$)));
