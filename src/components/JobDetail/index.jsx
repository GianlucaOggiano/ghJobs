const JobDetail = ({ job }) => {
  return (
    <div className='jobDetail'>
      <h1>{job.title}</h1>
      <div
        className='jobDetail__description'
        dangerouslySetInnerHTML={{ __html: job.description }}
      ></div>
    </div>
  );
};

export default JobDetail;
