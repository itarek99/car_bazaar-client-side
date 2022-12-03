import { HiLocationMarker } from 'react-icons/hi';

const ProductCard = ({ productDerails, setBookingItem }) => {
  return (
    <div key={productDerails._id} className='grid grid-cols-1 items-center border shadow-md md:grid-cols-3'>
      <div className='h-full'>
        <img className='h-full w-full object-cover' src={productDerails.photo} alt='' />
      </div>
      <div className='py-6 px-6 md:col-span-2 md:px-10'>
        <div className=''>
          <div className='flex items-center justify-between'>
            <p className='mb-1 text-2xl font-medium capitalize text-primary'>
              {productDerails.brand} {productDerails.model}
            </p>
            {productDerails.advertise && <div className='badge-primary badge py-3 text-white'>Advertised</div>}
          </div>
          <p className='flex items-center gap-1'>
            <HiLocationMarker />
            {productDerails.location}
          </p>
        </div>
        <div className='my-4 flex items-center justify-between'>
          <div>
            <p className='text-sm'>New Price</p>
            <p className='text-lg font-bold md:text-xl'>{productDerails.new_price}</p>
          </div>
          <div className='h-16 w-[1px] bg-gray-700'></div>
          <div>
            <p className='text-sm'>Selling Price</p>
            <p className='text-lg font-bold md:text-xl'>{productDerails.selling_price}</p>
          </div>
          <div className='h-16 w-[1px] bg-gray-700'></div>

          <div>
            <p className='text-sm'>Use</p>
            <p className='text-lg font-bold md:text-xl'>
              {new Date(productDerails?.posted_time).getFullYear() - productDerails.purchasing_year}
              <span className='text-sm font-normal'> years</span>
            </p>
          </div>
        </div>
        <div className='text-sm text-gray-600'>Advertise By: {productDerails.advertiser_name}</div>
        <p className='text-xs'>Posted On: {new Date(productDerails?.posted_time).toLocaleString()}</p>
        <div className='mt-2 text-right sm:mt-0'>
          <label
            onClick={() => setBookingItem(productDerails)}
            htmlFor='booking-modal'
            className='btn-primary btn text-white'
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
