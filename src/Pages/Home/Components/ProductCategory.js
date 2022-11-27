import { Link } from 'react-router-dom';

const ProductCategory = () => {
  return (
    <div className='container mx-auto px-2 py-12'>
      <div className='text-center'>
        <h3 className='font-bold text-3xl'>Browse By Category</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-8'>
        <Link className='bg-red-300 p-4' to='category/sedan'>
          <div>Sedan</div>
        </Link>
        <Link className='bg-red-300 p-4' to='category/luxury'>
          <div>Luxury</div>
        </Link>
        <Link className='bg-red-300 p-4' to='category/supercar'>
          <div>Super Car</div>
        </Link>
      </div>
    </div>
  );
};
export default ProductCategory;
