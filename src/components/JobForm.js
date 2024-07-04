import React, { useState, useEffect } from 'react';

const JobForm = ({ currentJob, jobData, handleChange, handleSaveInfo, handleCloseForm, handleCreateJob }) => {
  const [closing, setClosing] = useState(false);

  const handleFormClose = () => {
    setClosing(true);
    setTimeout(() => {
      handleCloseForm();
      setClosing(false);
    }, 500);
  };

  const handleFocus = (e) => {
    e.target.type = e.target.dataset.type;
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.type = 'text';
    }
  };

  useEffect(() => {
    if (currentJob) {
      handleChange({ target: { id: 'firstName', value: currentJob.firstName || '' } });
      handleChange({ target: { id: 'lastName', value: currentJob.lastName || '' } });
      handleChange({ target: { id: 'phone', value: currentJob.phone || '' } });
      handleChange({ target: { id: 'email', value: currentJob.email || '' } });
      handleChange({ target: { id: 'jobType', value: currentJob.jobType || '' } });
      handleChange({ target: { id: 'jobSource', value: currentJob.jobSource || '' } });
      handleChange({ target: { id: 'jobDescription', value: currentJob.jobDescription || '' } });
      handleChange({ target: { id: 'address', value: currentJob.address || '' } });
      handleChange({ target: { id: 'city', value: currentJob.city || '' } });
      handleChange({ target: { id: 'state', value: currentJob.state || '' } });
      handleChange({ target: { id: 'zipCode', value: currentJob.zipCode || '' } });
      handleChange({ target: { id: 'area', value: currentJob.area || '' } });
      handleChange({ target: { id: 'startDate', value: currentJob.startDate || '' } });
      handleChange({ target: { id: 'startTime', value: currentJob.startTime || '' } });
      handleChange({ target: { id: 'endTime', value: currentJob.endTime || '' } });
      handleChange({ target: { id: 'testSelect', value: currentJob.testSelect || '' } });
    }
  }, [currentJob]);

  return (
    <div className={`form-container ${closing ? 'hidden' : ''}`}>
      <button className="close-button" onClick={handleFormClose}>×</button>
      <div className="container">
        <div className="form-group client-details">
          <h2>Client details</h2>
          <div className="form-row">
            <input
              type="text"
              id="firstName"
              placeholder="First name"
              value={jobData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              id="lastName"
              placeholder="Last name"
              value={jobData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              id="phone"
              placeholder="Phone"
              value={jobData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              id="email"
              placeholder="Email (optional)"
              value={jobData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group job-details">
          <h2>Job details</h2>
          <div className="form-row">
            <select
              id="jobType"
              value={jobData.jobType}
              onChange={handleChange}
            >
              <option value="">Job type</option>
            </select>
            <select
              id="jobSource"
              value={jobData.jobSource}
              onChange={handleChange}
            >
              <option value="">Job source</option>
            </select>
          </div>
          <div className="form-row">
            <textarea
              id="jobDescription"
              placeholder="Job description (optional)"
              value={jobData.jobDescription}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="form-group service-location">
          <h2>Service location</h2>
          <div className="form-row">
            <input
              type="text"
              id="address"
              placeholder="Address"
              value={jobData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              id="city"
              placeholder="City"
              value={jobData.city}
              onChange={handleChange}
            />
            <input
              type="text"
              id="state"
              placeholder="State"
              value={jobData.state}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              id="zipCode"
              placeholder="Zip code"
              value={jobData.zipCode}
              onChange={handleChange}
            />
            <select
              id="area"
              value={jobData.area}
              onChange={handleChange}
            >
              <option value="">Area</option>
            </select>
          </div>
        </div>
        <div className="form-group scheduled">
          <h2>Scheduled</h2>
          <div className="form-row">
            <input
              type="text"
              id="startDate"
              placeholder="Start date"
              data-type="date"
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={jobData.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              id="startTime"
              placeholder="Start time"
              data-type="time"
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={jobData.startTime}
              onChange={handleChange}
            />
            <input
              type="text"
              id="endTime"
              placeholder="End time"
              data-type="time"
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={jobData.endTime}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <select
              id="testSelect"
              value={jobData.testSelect}
              onChange={handleChange}
            >
              <option value="">Test select</option>
            </select>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="create-job-button" type="button" onClick={handleCreateJob}>Create Job</button>
        <button className="info-button" type="button" onClick={handleSaveInfo}>Save info</button>
      </div>
    </div>
  );
};

export default JobForm;
