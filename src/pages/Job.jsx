import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import JobDetail from '../components/JobDetail';
import JobSidebar from '../components/JobSidebar';
import { fetchJob } from '../redux/actions';

const Job = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedJob } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchJob(id));
  }, [dispatch, id]);

  return (
    <div>
      <main>
        {selectedJob && (
          <>
            <JobSidebar apply={selectedJob.how_to_apply} />
            <JobDetail job={selectedJob} />
          </>
        )}
      </main>
    </div>
  );
};

export default Job;
