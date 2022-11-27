import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const ProductsByCategory = () => {
  let { id } = useParams();
  console.log(id);

  const { data: carsByCategory } = useQuery({
    queryKey: ['productByCategory'],
    queryFn: () => fetch(`http://localhost:5000/category/${id}`).then((res) => res.json()),
  });

  if (!carsByCategory) return <p>Loading....</p>;

  return (
    <div className='container mx-auto px-2'>
      <div className=' max-w-5xl mx-auto'>
        {carsByCategory.length > 0 ? (
          <h3 className='capitalize text-xl font-bold mt-2'>All Advertisements On "{id}" Category:</h3>
        ) : (
          <h3 className='capitalize text-xl font-bold mt-8 text-center'>No Advertisements On "{id}" Category</h3>
        )}

        <div className='flex flex-col gap-8 mt-6 mb-12'>
          {carsByCategory?.map((carByCategory) => (
            <div key={carByCategory._id} className='grid grid-cols-1 items-center md:grid-cols-3 shadow-md'>
              <div className='h-72'>
                <img className='h-72 w-full object-cover' src={carByCategory.photo} alt='' />
              </div>
              <div className='md:col-span-2 p-6'>
                <div className=''>
                  <p className='text-primary text-lg font-bold capitalize'>
                    {carByCategory.brand} {carByCategory.model}
                  </p>
                  <p className=''>{carByCategory.location}</p>
                  <p className='text-sm'>Posted on: {new Date(carByCategory?.posted_time).toLocaleString()}</p>
                </div>
                <div className='flex justify-between'>
                  <div>
                    <p>Resale Price</p>
                    <p>{carByCategory.selling_price}</p>
                  </div>
                  <div>
                    <p>New Price</p>
                    <p>{carByCategory.new_price}</p>
                  </div>
                  <div>
                    <p>Years Of Use</p>
                    <p>{new Date(carByCategory?.posted_time).getFullYear() - carByCategory.purchasing_year}</p>
                  </div>
                </div>
                <div className='text-right mt-4'>
                  <button className='btn btn-primary text-white'>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductsByCategory;
