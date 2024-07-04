import React from 'react';

const JobList = ({ jobs, handleJobClick, handleNewJob }) => {
  return (
    <div className="sidebar">
      <h2 onClick={handleNewJob}>CRM Integration</h2>
      <ul>
        <li onClick={handleNewJob}>Create new job</li>
        {jobs.map((job) => (
          <li key={job.id} onClick={() => handleJobClick(job)}>
            Job-{job.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
