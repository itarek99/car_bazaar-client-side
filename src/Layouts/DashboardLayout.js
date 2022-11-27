import { useContext } from 'react';
import toast from 'react-hot-toast';
import { HiHome, HiMenuAlt3 } from 'react-icons/hi';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useSeller from '../hooks/useSeller';

const DashboardLayout = () => {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSeller] = useSeller(user?.email);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('You Have Been Successfully Logged Out.');
        navigate('/');
      })
      .catch((err) => {
        toast.error('Something Went Wrong!');
      });
  };

  return (
    <div className='drawer drawer-mobile'>
      <input id='dashboard-drawer' type='checkbox' className='drawer-toggle' />

      <div className='drawer-content scrollbar-hide pt-6'>
        <div className='w-full max-w-2xl mx-auto text-right px-2'>
          <label htmlFor='dashboard-drawer' className='btn btn-primary drawer-button lg:hidden'>
            <HiMenuAlt3 className='text-2xl' />
          </label>
        </div>
        <Outlet />
      </div>
      <div className='drawer-side'>
        <label htmlFor='dashboard-drawer' className='drawer-overlay'></label>
        <ul className='menu w-64 bg-gray-100 text-base-content'>
          <li className='font-bold text-2xl mb-4 flex justify-center'>
            <Link className='hover:bg-transparent' to='/'>
              <HiHome /> CAR BAZAAR
            </Link>
          </li>
          {isSeller && (
            <>
              <li className='font-medium hover:text-primary'>
                <Link to='/dashboard/add-product'>Add A Product </Link>
              </li>
              <li className='font-medium hover:text-primary'>
                <Link to='/dashboard/my-products'>My Products</Link>
              </li>
            </>
          )}

          {!isSeller && (
            <>
              <li className='font-medium hover:text-primary'>
                <Link to='/dashboard/my-orders'>My Orders</Link>
              </li>
            </>
          )}

          <li className='mt-auto'>
            <button onClick={handleLogOut} className='btn btn-primary text-white'>
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DashboardLayout;
