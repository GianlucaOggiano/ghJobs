import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JobsList from '../components/JobsList';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
import { fetchJobs } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchJobs(location));
  }, [dispatch, location]);

  return (
    <div>
      <SearchBar />
      <main>
        <Sidebar />
        <JobsList />
      </main>
    </div>
  );
};

export default Home;
