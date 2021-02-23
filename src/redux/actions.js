import {
  JOBS_FAIL,
  JOBS_REQUEST,
  JOBS_SUCCESS,
  JOB_REQUEST,
  JOB_SUCCESS,
  JOB_FAIL,
} from './types';

import axios from '../lib/axios';

export const fetchJobs = (location) => async (dispatch) => {
  try {
    dispatch({
      type: JOBS_REQUEST,
    });
    const { data: jobs } = await axios.get(
      `/positions.json?location=${location}`
    );
    dispatch({
      type: JOBS_SUCCESS,
      payload: jobs,
    });
  } catch (error) {
    dispatch({
      type: JOBS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchJob = (id) => async (dispatch) => {
  try {
    dispatch({
      type: JOB_REQUEST,
    });
    const { data: job } = await axios.get(`/positions/${id}.json`);
    dispatch({
      type: JOB_SUCCESS,
      payload: job,
    });
  } catch (error) {
    dispatch({
      type: JOB_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const search = (input) => async (dispatch) => {
  try {
    dispatch({
      type: JOBS_REQUEST,
    });
    const { data: jobs } = await axios.get(
      `/positions.json?description=${input}`
    );
    dispatch({
      type: JOBS_SUCCESS,
      payload: jobs,
    });
  } catch (error) {
    dispatch({
      type: JOBS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
