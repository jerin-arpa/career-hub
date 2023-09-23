import { useLoaderData, useParams } from "react-router-dom";
import JobBanner from "../JobBanner/JobBanner";
import { GoLocation } from 'react-icons/go';
import { AiOutlineDollar, AiOutlineMail } from 'react-icons/ai';
import { BsCalendarWeek, BsTelephone } from 'react-icons/bs';


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    return (
        <div>
            <JobBanner></JobBanner>
            <div className="flex flex-col lg:flex-row gap-7 my-20">
                <div className=" w-full lg:w-3/4 rounded-xl p-5">
                    <div className="pb-5">
                        <span className="font-bold text-xl">Job Description:</span> {job.job_description}
                    </div>
                    <div className="pb-5">
                        <span className="font-bold text-xl">Job Responsibility:</span> {job.job_responsibility}
                    </div>
                    <div className="pb-5">
                        <p className="font-bold text-xl">Educational Requirements:</p>
                        <p>{job.educational_requirements}</p>
                    </div>
                    <div className="pb-5">
                        <p className="font-bold text-xl">Experiences:</p>
                        <p>{job.experiences}</p>
                    </div>
                </div>

                <div className=" w-full lg:w-1/4">
                    <div className="border-2 rounded-lg p-5">
                        <h2 className=" font-bold">Job Details</h2>
                        <hr className="my-3" />

                        <div className='mb-3'>
                            <div className='flex gap-2'>
                                <p className='flex items-center'><AiOutlineDollar className="text-blue-400"></AiOutlineDollar></p>
                                <p><span className="font-bold">Salary:</span> {job.salary}</p>
                            </div>
                            <div className='flex gap-2'>
                                <p><BsCalendarWeek className="text-blue-400 mt-1"></BsCalendarWeek></p>
                                <p><span className="font-bold">Job Title:</span> {job.job_title}</p>
                            </div>
                        </div>

                        <h2 className=" font-bold">Contact Information</h2>
                        <hr className="my-3" />

                        <div className='mb-3'>
                            <div className='flex gap-2'>
                                <p className='flex items-center'><BsTelephone className="text-blue-400"></BsTelephone></p>
                                <p><span className="font-bold">Phone:</span> {job.contact_information.phone}</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex items-center'><AiOutlineMail className="text-blue-400"></AiOutlineMail></p>
                                <p><span className="font-bold">Email:</span> {job.contact_information.email}</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='mt-1'><GoLocation className="text-blue-400"></GoLocation></p>
                                <p><span className="font-bold">Address:</span> {job.contact_information.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className="btn btn-primary w-full">Apply Now</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default JobDetails;