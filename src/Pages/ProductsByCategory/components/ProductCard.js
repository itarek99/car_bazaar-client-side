const ProductCard = ({ productDerails, setBookingItem }) => {
  return (
    <div key={productDerails._id} className='grid grid-cols-1 items-center md:grid-cols-3 shadow-md'>
      <div className='h-72'>
        <img className='h-72 w-full object-cover' src={productDerails.photo} alt='' />
      </div>
      <div className='md:col-span-2 p-6'>
        <div className=''>
          <div className='flex justify-between items-center'>
            <p className='text-primary text-lg font-bold capitalize'>
              {productDerails.brand} {productDerails.model}
            </p>
            {productDerails.advertise && <div className='badge badge-primary text-white py-3'>Advertised</div>}
          </div>
          <p className=''>{productDerails.location}</p>
          <p className='text-sm'>Posted on: {new Date(productDerails?.posted_time).toLocaleString()}</p>
        </div>
        <div className='flex justify-between'>
          <div>
            <p>Resale Price</p>
            <p>{productDerails.selling_price}</p>
          </div>
          <div>
            <p>New Price</p>
            <p>{productDerails.new_price}</p>
          </div>
          <div>
            <p>Years Of Use</p>
            <p>{new Date(productDerails?.posted_time).getFullYear() - productDerails.purchasing_year}</p>
          </div>
        </div>
        <div>Advertise By: {productDerails.advertiser_name}</div>
        <div className='text-right mt-4'>
          <label
            onClick={() => setBookingItem(productDerails)}
            htmlFor='booking-modal'
            className='btn btn-primary text-white'
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
