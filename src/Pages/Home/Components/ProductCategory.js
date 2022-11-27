import { Link } from 'react-router-dom';
import luxury from '../../../assets/icons/luxurycar.png';
import sedan from '../../../assets/icons/sedan.png';
import supercar from '../../../assets/icons/supercar.png';

const ProductCategory = () => {
  return (
    <div className='container mx-auto px-2 py-12'>
      <div className=''>
        <h3 className='font-bold text-3xl'>Browse By Category</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-8'>
        <Link className='shadow-lg py-4 px-8 border rounded-md' to='category/sedan'>
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-bold'>Sedan</p>
            <img className='h-28' src={sedan} alt='sedan' />
          </div>
        </Link>
        <Link className='shadow-lg py-4 px-8 border rounded-md' to='category/luxury'>
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-bold'>Luxury</p>
            <img className='h-28' src={luxury} alt='sedan' />
          </div>
        </Link>
        <Link className='shadow-lg py-4 px-8 border rounded-md' to='category/supercar'>
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-bold'>Super Car</p>
            <img className='h-28' src={supercar} alt='sedan' />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ProductCategory;
