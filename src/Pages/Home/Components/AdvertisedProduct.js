import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/Loader/Loader';

const AdvertisedProduct = () => {
  const { data: advertisedProducts = [] } = useQuery({
    queryKey: ['advertised-product'],
    queryFn: () => fetch(`http://localhost:5000/advertised-products`).then((res) => res.json()),
  });

  if (!advertisedProducts) return <Loader />;

  if (advertisedProducts.length < 1) return null;

  return (
    <div className='container mx-auto px-2 py-12'>
      <div className=''>
        <h3 className='font-bold text-3xl'>Advertised Products</h3>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 mt-6 gap-8'>
        {advertisedProducts.map((advertisedProduct) => (
          <div key={advertisedProduct._id} className='card bg-base-100 shadow-xl rounded-none'>
            <figure>
              <img className='h-60 w-full object-cover' src={advertisedProduct.photo} alt='Shoes' />
            </figure>
            <div className='card-body py-6 px-4'>
              <h2 className='card-title'>
                {advertisedProduct.brand} {advertisedProduct.model}
                <div className='badge badge-primary text-white py-3'>Advertised</div>
              </h2>
              <p className='-mt-1'>{advertisedProduct.location}</p>
              <div className='flex justify-between mt-2'>
                <div>
                  <p>Resale Price</p>
                  <p>{advertisedProduct.selling_price}</p>
                </div>
                <div>
                  <p>New Price</p>
                  <p>{advertisedProduct.new_price}</p>
                </div>
                <div>
                  <p>Years Of Use</p>
                  <p>{new Date(advertisedProduct?.posted_time).getFullYear() - advertisedProduct.purchasing_year}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdvertisedProduct;
