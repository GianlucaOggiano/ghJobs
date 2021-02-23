import {
  JOBS_FAIL,
  JOBS_REQUEST,
  JOBS_SUCCESS,
  JOB_FAIL,
  JOB_REQUEST,
  JOB_SUCCESS,
  SET_LOCATION,
  SET_FULL_TIME,
} from './types';

const AppReducer = (state, action) => {
  switch (action.type) {
    case JOBS_REQUEST:
    case JOB_REQUEST:
      return { ...state, loading: true, onlyFullTime: [], fullTime: false };
    case JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedJob: null,
        jobs: action.payload,
      };
    case JOB_SUCCESS:
      return { ...state, loading: false, selectedJob: action.payload };
    case JOBS_FAIL:
    case JOB_FAIL:
      return {
        ...state,
        loading: false,
        jobs: [],
        error: action.payload,
        selectedJob: null,
      };
    case SET_LOCATION:
      return { ...state, location: action.payload };
    case SET_FULL_TIME:
      return {
        ...state,
        fullTime: action.payload,
        onlyFullTime: state.jobs.filter((j) => j.type === 'Full Time'),
      };

    default:
      return state;
  }
};

export default AppReducer;
