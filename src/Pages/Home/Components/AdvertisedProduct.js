import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/Loader/Loader';
import AdvertisedProductCard from './AdvertisedProductCard';

const AdvertisedProduct = () => {
  const { data: advertisedProducts = [] } = useQuery({
    queryKey: ['advertised-product'],
    queryFn: () => fetch(`https://car-bazar-server-seven.vercel.app/advertised-products`).then((res) => res.json()),
  });

  if (!advertisedProducts) return <Loader />;

  if (advertisedProducts.length < 1) return null;

  return (
    <div className='container mx-auto px-2 py-12'>
      <div className=''>
        <h3 className='text-3xl font-bold'>Advertised Products</h3>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3'>
        {advertisedProducts.map((advertisedProduct) => (
          <AdvertisedProductCard key={advertisedProduct._id} advertisedProduct={advertisedProduct} />
        ))}
      </div>
    </div>
  );
};
export default AdvertisedProduct;
