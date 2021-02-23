import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import JobItem from '../JobItem';

const JobsList = () => {
  const { jobs, fullTime, onlyFullTime, loading } = useSelector(
    (state) => state
  );

  const [showedJobs, setShowedJobs] = useState(jobs);

  console.log({ loading });

  useEffect(() => {
    fullTime ? setShowedJobs(onlyFullTime) : setShowedJobs(jobs);
  }, [fullTime, jobs, onlyFullTime]);

  return (
    <div className='jobsList'>
      {loading && <p>Loading...</p>}
      {!loading &&
        showedJobs.length > 0 &&
        showedJobs.map((job) => <JobItem job={job} key={job.id} />)}
      {!loading && showedJobs && showedJobs.length === 0 && (
        <p>No results found...</p>
      )}
    </div>
  );
};

export default JobsList;
