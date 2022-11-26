import { Link } from 'react-router-dom';

const ProductCategory = () => {
  return (
    <div className='container mx-auto px-2 py-12'>
      <div className='text-center'>
        <h3 className='font-bold text-3xl'>Browse By Category</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-8'>
        <Link className='bg-red-300 p-4' to='category/sedan'>
          <div>1</div>
        </Link>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
};
export default ProductCategory;
