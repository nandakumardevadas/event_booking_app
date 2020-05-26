import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createEpicMiddleware } from 'redux-observable';
import reducers from './reducers';
import epics from './epics';

const epicMiddleware = createEpicMiddleware();

// const getMiddleware = () => {
//   if (process.env.NODE_ENV === 'production') {
//     return applyMiddleware(epicMiddleware);
//   }
//   return applyMiddleware(epicMiddleware, createLogger());
// };

export const store = createStore(
    reducers,
    //   composeWithDevTools(getMiddleware())
    applyMiddleware(epicMiddleware)
);
epicMiddleware.run(epics);
