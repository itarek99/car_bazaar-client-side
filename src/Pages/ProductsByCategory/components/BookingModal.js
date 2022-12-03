import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ setBookingItem, bookingItem, refetch }) => {
  const { user } = useContext(AuthContext);

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

  return (
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
  );
};
export default BookingModal;
