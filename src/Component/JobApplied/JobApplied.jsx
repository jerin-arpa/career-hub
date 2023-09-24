import PropTypes from 'prop-types';
import { GoLocation } from 'react-icons/go';
import { AiOutlineDollar } from 'react-icons/ai';

const JobApplied = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;

    return (
        <div className='mb-5'>
            <div className="bg-base-100 border-2 border-gray-200 p-10 rounded-xl flex flex-col md:flex-row gap-10">
                <figure className='bg-gray-300 p-5 w-44 flex items-center justify-center'>
                    <img className=' mb-7' src={logo} alt="" />
                </figure>
                <div className="flex flex-col md:flex-row gap-10 w-full">
                    <div>
                        <h2 className="text-2xl font-bold mb-1">{job_title}</h2>
                        <p className='text-xl mb-3'>{company_name}</p>

                        <div className='flex gap-5 mb-3'>
                            <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
                            <button className="btn btn-outline btn-primary">{job_type}</button>
                        </div>


                        <div className='flex gap-8 mb-4 text-xl'>
                            <div className='flex gap-2'>
                                <p className='flex items-center'><GoLocation></GoLocation></p>
                                <p>{location}</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex items-center'><AiOutlineDollar></AiOutlineDollar></p>
                                <p>Salary: {salary}</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center flex-grow justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

JobApplied.propTypes = {
    job: PropTypes.object,
};

export default JobApplied;