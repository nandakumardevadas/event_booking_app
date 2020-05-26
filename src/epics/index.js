import { combineEpics } from 'redux-observable';
import { eventEpic } from './eventEpic';

export default combineEpics(eventEpic);
