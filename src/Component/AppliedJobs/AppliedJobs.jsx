import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";
import JobApplied from "../JobApplied/JobApplied";
const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            // console.log(jobsApplied);

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs]);

    return (
        <div>
            <div style={{ backgroundImage: 'url(/src/assets/images/bg1.png)' }} className="bg-no-repeat py-20">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Applied Jobs</h1>
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <details className="dropdown mb-10">
                    <summary className="m-1 btn btn-neutral">Filtered By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                    </ul>
                </details>
            </div>

            <div>
                {
                    displayJobs.map(job => <JobApplied key={job.id} job={job}></JobApplied>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;