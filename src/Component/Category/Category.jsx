import PropTypes from 'prop-types';

const Category = ({ category }) => {
    const { logo, category_name, availability } = category;

    return (
        <div className='border-2 border-gray-200 rounded-xl p-7 flex justify-center'>
            <div>
                <img className='w-44 mb-4' src={logo} alt="" />
                <h2 className='text-2xl font-bold'>{category_name}</h2>
                <p className='text-xl'>{availability}</p>
            </div>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object,
};

export default Category;