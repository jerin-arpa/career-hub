import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="container mx-auto">
            <div className="mt-40">
                <h2 className="text-6xl font-bold text-center">OOPS!!!!</h2>
                <div className="flex justify-center mt-5">
                    <button className="btn btn-primary">
                        <Link to='/'>Go Home</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;