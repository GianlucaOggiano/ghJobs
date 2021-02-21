import { BiWorld, BiTimeFive } from 'react-icons/bi';

const JobItem = ({ job }) => {
  return (
    <div className='jobItem'>
      <div className='company-logo'>
        <img src={job.company_logo} alt={`${job.company}-logo`} />
      </div>
      <div className='job-info'>
        <small>{job.company}</small>
        <h3>{job.title}</h3>
        <div className='job-info-footer'>
          <p>{job.type}</p>
          <div>
            <small>
              <BiWorld />
              {job.location}
            </small>
            <small>
              <BiTimeFive />
              {new Date(job.created_at).toLocaleDateString()}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
