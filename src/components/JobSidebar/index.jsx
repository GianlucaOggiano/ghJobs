import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const JobSidebar = ({ apply }) => {
  return (
    <div className='jobSidebar'>
      <Link to='/'>
        <div className='jobSidebar__back'>
          <FiArrowLeft />
          back to search
        </div>
      </Link>
      <h5>how to apply</h5>
      <div
        dangerouslySetInnerHTML={{ __html: apply ? apply : '' }}
        className='jobSidebar__apply'
      ></div>
    </div>
  );
};

export default JobSidebar;
