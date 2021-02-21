import { useContext } from 'react';
import JobsList from '../components/JobsList';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
import { GlobalContext } from '../context/GlobalContext';

const Home = ({ data }) => {
  const ctx = useContext(GlobalContext);

  console.log(ctx.state.jobs);
  return (
    <div>
      <SearchBar />
      <main>
        <Sidebar />
        <JobsList jobs={ctx.state.jobs} />
      </main>
    </div>
  );
};

export default Home;
