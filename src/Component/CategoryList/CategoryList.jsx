import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);


    return (
        <div className="my-20">
            <div className="my-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-center">Job Category List</h2>
                <p className="text-center mt-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryList;