import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducers from './reducers';
import epics from './epics';

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
    reducers,
    applyMiddleware(epicMiddleware)
);
epicMiddleware.run(epics);
