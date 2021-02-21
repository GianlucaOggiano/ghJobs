import { JOBS_ERROR, JOBS_REQUEST, JOBS_SUCCESS, SET_LOCATION } from './types';

const AppReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case JOBS_REQUEST:
      return { ...state, loading: true };
    case JOBS_SUCCESS:
      return { ...state, loading: false, jobs: action.payload.jobs };
    case JOBS_ERROR:
      return { ...state, loading: false, jobs: [], error: action.payload };
    case SET_LOCATION:
      return { ...state, location: action.payload.location };
    default:
      return state;
  }
};

export default AppReducer;
