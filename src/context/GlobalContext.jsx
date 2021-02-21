import { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from '../lib/axios';
import { JOBS_SUCCESS } from './types';

const initialState = {
  jobs: [],
  selectedJob: null,
  location: 'berlin',
  loading: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data } = await axios.get(
        `/positions.json?location=${state.location}`
      );
      dispatch({ type: JOBS_SUCCESS, payload: { jobs: data } });
    };

    fetchJobs();
  }, [state.location]);

  return (
    <GlobalContext.Provider value={{ state }}>
      {children}
    </GlobalContext.Provider>
  );
};
