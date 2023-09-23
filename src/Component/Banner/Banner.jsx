const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex items-center">
                <div>
                    <h1 className="text-4xl lg:text-7xl font-bold">One Step <br />Closer To Your <br /><span className="text-blue-600">Dream Job</span></h1>
                    <p className="my-5 w-full lg:w-2/4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            <div>
                <img src="/src/assets/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;