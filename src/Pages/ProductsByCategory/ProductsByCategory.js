import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import ProductCard from './components/ProductCard';

const ProductsByCategory = () => {
  let { id } = useParams();
  const { user, logOut } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  const [bookingItem, setBookingItem] = useState(null);
  const navigate = useNavigate();

  const { data: carsByCategory, refetch } = useQuery({
    queryKey: ['productByCategory'],
    queryFn: () =>
      fetch(`https://car-bazar-server-seven.vercel.app/category/${id}`, {
        headers: { authorization: `bearer ${localStorage.getItem('carToken')}` },
      }).then((res) => res.json()),
  });

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/login');
      })
      .catch((err) => console.error(err));
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookingData = {
      buyerName: form.buyerName.value,
      buyerEmail: form.buyerEmail.value,
      productName: form.productName.value,
      productPrice: form.productPrice.value,
      buyerPhone: form.buyerPhone.value,
      meetingLocation: form.meetingLocation.value,
      productId: bookingItem._id,
    };

    fetch(`https://car-bazar-server-seven.vercel.app/bookings`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          fetch(`https://car-bazar-server-seven.vercel.app/booked-status?productId=${result.id}`, { method: 'PATCH' });
          toast.success('Booking Confirmed!');
          setBookingItem(null);
          refetch();
        } else {
          toast.error(result.message);
        }
      });
  };

  if (isSellerLoading || isAdminLoading) return <Loader />;
  if (isSeller || isAdmin)
    return (
      <div className='h-[90vh] flex items-center justify-center'>
        <div className='-mt-16 text-center'>
          <p className='text-xl'>Please Logout And Login With Buyer Account!</p>
          <button onClick={handleLogOut} className='btn btn-primary text-white mt-4'>
            Log Out
          </button>
        </div>
      </div>
    );
  if (!carsByCategory) return <Loader />;

  return (
    <div className='container mx-auto px-2'>
      <div className=' max-w-5xl mx-auto'>
        {carsByCategory.length > 0 ? (
          <h3 className='capitalize text-xl font-bold mt-2'>All Advertisements On "{id}" Category:</h3>
        ) : (
          <h3 className='capitalize text-xl font-bold mt-8 text-center'>No Advertisements On "{id}" Category</h3>
        )}

        <div className='flex flex-col gap-8 mt-6 mb-12'>
          {carsByCategory?.map((productDerails) => (
            <ProductCard key={productDerails._id} productDerails={productDerails} setBookingItem={setBookingItem} />
          ))}
        </div>
      </div>

      {/* Modal Code */}
      {bookingItem && (
        <>
          <input type='checkbox' id='booking-modal' className='modal-toggle' />
          <div className='modal'>
            <div className='modal-box relative'>
              <label
                onClick={() => setBookingItem(null)}
                htmlFor='booking-modal'
                className='btn btn-sm btn-circle absolute right-2 top-2'
              >
                ✕
              </label>
              <h3 className='text-lg font-bold mb-4'>
                {bookingItem?.brand} {bookingItem?.model}
              </h3>
              <div>
                <form onSubmit={handleBooking}>
                  <div className='form-control mb-4'>
                    <input
                      name='buyerName'
                      type='text'
                      defaultValue={user.displayName}
                      readOnly
                      className='input input-bordered'
                    />
                  </div>

                  <div className='form-control mb-4'>
                    <input
                      name='buyerEmail'
                      type='email'
                      defaultValue={user.email}
                      readOnly
                      className='input input-bordered'
                    />
                  </div>

                  <div className='form-control mb-4'>
                    <input
                      name='productName'
                      type='email'
                      defaultValue={`${bookingItem?.brand} ${bookingItem?.model}`}
                      readOnly
                      className='input input-bordered'
                    />
                  </div>
                  <div className='form-control mb-4'>
                    <input
                      name='productPrice'
                      type='number'
                      defaultValue={bookingItem?.selling_price}
                      readOnly
                      className='input input-bordered'
                    />
                  </div>
                  <div className='form-control mb-4'>
                    <input
                      required
                      name='buyerPhone'
                      type='text'
                      placeholder='Phone Number'
                      className='input input-bordered'
                    />
                  </div>
                  <div className='form-control mb-4'>
                    <input
                      required
                      name='meetingLocation'
                      type='text'
                      placeholder='Meeting Location'
                      className='input input-bordered'
                    />
                  </div>

                  <button type='submit' className='btn btn-primary'>
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ProductsByCategory;
