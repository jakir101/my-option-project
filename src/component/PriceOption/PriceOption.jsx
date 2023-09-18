import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option
    return (
        <div className='bg-blue-500 text-white p-4 flex flex-col '> 
            <h2 className='text-center font-bold'>
                <span className='text-4xl'>{price}</span>
                <span>/Per Month</span>
            </h2>
            <h4 className='text-3xl font-semibold text-center'>{name}</h4>
            <div className='flex-grow'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='bg-blue-800 text-center w-full rounded-xl py-2 hover:bg-blue-400'>submit</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;