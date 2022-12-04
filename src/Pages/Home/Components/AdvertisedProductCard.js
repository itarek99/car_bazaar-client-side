import { HiLocationMarker } from 'react-icons/hi';

const AdvertisedProductCard = ({ advertisedProduct }) => {
  return (
    <div className='card rounded-none bg-base-100 shadow-xl'>
      <figure>
        <img className='h-60 w-full object-cover' src={advertisedProduct.photo} alt='Shoes' />
      </figure>
      <div className='py-6 px-4'>
        <div className='flex items-center justify-between'>
          <p className='text-2xl font-medium capitalize text-primary'>
            {advertisedProduct.brand} {advertisedProduct.model}
          </p>
          {advertisedProduct.advertise && <div className='badge-primary badge py-3 text-white'>Advertised</div>}
        </div>
        <p className='flex items-center gap-1'>
          <HiLocationMarker />
          {advertisedProduct.location}
        </p>
        <div className='my-4 flex items-center justify-between'>
          <div>
            <p className='text-sm'>New Price</p>
            <p className='text-lg font-bold md:text-xl'>{advertisedProduct.new_price}</p>
          </div>
          <div className='h-16 w-[1px] bg-gray-700'></div>
          <div>
            <p className='text-sm'>Selling Price</p>
            <p className='text-lg font-bold md:text-xl'>{advertisedProduct.selling_price}</p>
          </div>
          <div className='h-16 w-[1px] bg-gray-700'></div>

          <div>
            <p className='text-sm'>Use</p>
            <p className='text-lg font-bold md:text-xl'>
              {new Date(advertisedProduct?.posted_time).getFullYear() - advertisedProduct.purchasing_year}
              <span className='text-sm font-normal'> years</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdvertisedProductCard;
