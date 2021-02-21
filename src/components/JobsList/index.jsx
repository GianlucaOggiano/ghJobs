import JobItem from '../JobItem';

const JobsList = ({ jobs }) => {
  return (
    <div className='jobsList'>
      {jobs.map((job) => (
        <JobItem job={job} key={job.id} />
      ))}
    </div>
  );
};

export default JobsList;
