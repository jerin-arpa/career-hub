const JobBanner = () => {
    return (
        <div>
            <div style={{ backgroundImage: 'url(/src/assets/images/bg1.png)' }} className="bg-no-repeat py-20">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Job Details</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobBanner;