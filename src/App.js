import React, { useState } from 'react';
import './styles.css';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import Modal from './components/Modal';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [jobData, setJobData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    jobType: '',
    jobSource: '',
    jobDescription: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    area: '',
    startDate: '',
    startTime: '',
    endTime: '',
    testSelect: ''
  });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleNewJob = () => {
    setCurrentJob(null);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setJobData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSaveInfo = () => {
    const newJob = { ...jobData, id: jobs.length + 1 };
    console.log('Saving job info:', newJob);
    setJobs([...jobs, newJob]);
    setShowForm(false);
  };

  const handleJobClick = (job) => {
    setCurrentJob(job);
    setJobData(job);
    setShowForm(true);
  };

  const handleCreateJob = () => {
    console.log('Job data to be sent:', JSON.stringify(jobData, null, 2));
    createDeal(jobData);
  };

  const createDeal = async (jobData) => {
    const dealData = {
      title: `${jobData.lastName} ${jobData.firstName}`,
      person_id: {
        name: `${jobData.lastName} ${jobData.firstName}`,
        email: [{ value: jobData.email, primary: true }],
        phone: [{ value: jobData.phone, primary: true }]
      },
      expected_close_date: jobData.startDate,
      status: 'open'
    };

    console.log('Deal data to be sent:', JSON.stringify(dealData, null, 2));

    try {
      const dealResponse = await fetch('https://api.pipedrive.com/v1/deals?api_token=API_KEY', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dealData)
      });
      const dealDataResponse = await dealResponse.json();

      console.log('Deal data received:', JSON.stringify(dealDataResponse, null, 2));

      if (dealDataResponse.success) {
        const dealId = dealDataResponse.data.id;

        const note1 = {
          content: `Job details: ${jobData.jobDescription}`,
          deal_id: dealId
        };
        await fetch('https://api.pipedrive.com/v1/notes?api_token=API_KEY', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(note1)
        });

        const note2 = {
          content: `Service location: Address: ${jobData.address}, City: ${jobData.city}, State: ${jobData.state}, Zip Code: ${jobData.zipCode}, Area: ${jobData.area}`,
          deal_id: dealId
        };
        await fetch('https://api.pipedrive.com/v1/notes?api_token=API_KEY', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(note2)
        });

        const note3 = {
          content: `Scheduled: Start Date: ${jobData.startDate}, Start Time: ${jobData.startTime}, End Time: ${jobData.endTime}`,
          deal_id: dealId
        };
        await fetch('https://api.pipedrive.com/v1/notes?api_token=API_KEY', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(note3)
        });

        const dealCheckResponse = await fetch(`https://api.pipedrive.com/v1/deals/${dealId}?api_token=API_KEY`);
        const dealCheckData = await dealCheckResponse.json();

        console.log('Deal data received:', JSON.stringify(dealCheckData, null, 2));

        if (dealCheckData.data) {
          const updatedDealData = {
            title: dealCheckData.data.title || `${jobData.lastName} ${jobData.firstName}`,
            person_id: dealCheckData.data.person_id || {
              name: `${jobData.lastName} ${jobData.firstName}`,
              email: [{ value: jobData.email, primary: true }],
              phone: [{ value: jobData.phone, primary: true }]
            },
            expected_close_date: dealCheckData.data.expected_close_date || jobData.startDate,
            status: 'open'
          };

          console.log('Updated deal data to be sent:', JSON.stringify(updatedDealData, null, 2));

          await fetch(`https://api.pipedrive.com/v1/deals/${dealId}?api_token=API_KEY`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedDealData)
          });
        }

        setModalMessage('Job created');
      } else {
        setModalMessage(`There is an error, double check the form: ${dealDataResponse.error}`);
      }
    } catch (error) {
      setModalMessage(`There is an error, double check the form: ${error.message}`);
    }
    setShowModal(true);
  };

  return (
    <div className="app">
      <JobList jobs={jobs} handleJobClick={handleJobClick} handleNewJob={handleNewJob} />
      <div className="content">
        {showForm && (
          <JobForm
            currentJob={currentJob}
            jobData={jobData}
            handleChange={handleChange}
            handleSaveInfo={handleSaveInfo}
            handleCloseForm={handleCloseForm}
            handleCreateJob={handleCreateJob}
          />
        )}
        <Modal showModal={showModal} setShowModal={setShowModal} modalMessage={modalMessage} />
      </div>
    </div>
  );
}

export default App;
