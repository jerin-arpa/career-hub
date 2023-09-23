import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";
const AppliedJobs = () => {

    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            console.log(jobsApplied);
        }
    }, [jobs]);

    return (
        <div>
            <h2>Job i will apply</h2>
        </div>
    );
};

export default AppliedJobs;