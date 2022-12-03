import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import BookingModal from './components/BookingModal';
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
      {bookingItem && <BookingModal setBookingItem={setBookingItem} bookingItem={bookingItem} refetch={refetch} />}
    </div>
  );
};
export default ProductsByCategory;
