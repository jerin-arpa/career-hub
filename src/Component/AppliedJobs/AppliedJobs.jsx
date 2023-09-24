import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";
import JobApplied from "../JobApplied/JobApplied";
const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);

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
                    <summary className="m-1 btn">Filtered By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>All</a></li>
                        <li><a>Remote</a></li>
                        <li><a>Onsite</a></li>
                    </ul>
                </details>
            </div>

            <div>
                {
                    appliedJobs.map(job => <JobApplied key={job.id} job={job}></JobApplied>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;