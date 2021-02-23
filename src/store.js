import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import AppReducer from './redux/AppReducer';

const initialState = {
  jobs: [],
  location: 'newyork',
  error: null,
  selectedJob: null,
  fulltime: false,
  onlyFullTime: [],
  loading: true,
};

const middleware = [thunk];

const store = createStore(
  AppReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
