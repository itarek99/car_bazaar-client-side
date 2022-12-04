const AdvertisedProductCard = ({ advertisedProduct }) => {
  return (
    <div className='card rounded-none bg-base-100 shadow-xl'>
      <figure>
        <img className='h-60 w-full object-cover' src={advertisedProduct.photo} alt='Shoes' />
      </figure>
      <div className='card-body py-6 px-4'>
        <h2 className='card-title'>
          {advertisedProduct.brand} {advertisedProduct.model}
          <div className='badge-primary badge py-3 text-white'>Advertised</div>
        </h2>
        <p className='-mt-1'>{advertisedProduct.location}</p>
        <div className='mt-2 flex justify-between'>
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
  );
};
export default AdvertisedProductCard;
