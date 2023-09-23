import { useEffect, useState } from "react";
import Job from "../Job/Job";
const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);


    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);


    return (
        <div className="mb-14">
            <div className="my-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-center mb-5">Featured Jobs:{jobs.length}</h2>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <div className="flex justify-center mt-10">
                    <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;