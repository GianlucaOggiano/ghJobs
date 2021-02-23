import { BiWorld, BiTimeFive } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const JobItem = ({ job }) => {
  return (
    <Link to={`/jobs/${job.id}`} className='jobItem'>
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
    </Link>
  );
};

export default JobItem;
