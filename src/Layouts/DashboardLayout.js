import { HiMenuAlt3 } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
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
          <li className='font-bold text-2xl mb-4'>
            <Link className='hover:bg-transparent' to='/'>
              CAR BAZAAR
            </Link>
          </li>
          <li className='font-medium hover:text-primary'>
            <Link to='/dashboard/add-product'>Add A Product </Link>
          </li>
          <li className='font-medium hover:text-primary'>
            <Link to='/'>My Products</Link>
          </li>

          <li className='mt-auto'>
            <button className='btn btn-primary text-white'>Log Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DashboardLayout;
