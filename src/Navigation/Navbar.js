import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('You Have Been Successfully Logged Out.');
      })
      .catch((err) => {
        toast.error('Something Went Wrong!');
      });
  };

  return (
    <div className='bg-base-100'>
      <div className='container mx-auto py-2'>
        <nav className='navbar justify-between'>
          <Link to='/' className='font-bold text-2xl'>
            CAR BAZAAR
          </Link>

          <ul className='flex gap-8'>
            <li className='font-medium  hover:text-primary transition-colors duration-300'>
              <Link to='/blog'>Blog</Link>
            </li>
            {user?.uid && (
              <>
                <li className='font-medium  hover:text-primary transition-colors duration-300'>
                  <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li className='font-medium  hover:text-primary transition-colors duration-300'>
                  <Link to='/dashboard'>{user.displayName}</Link>
                </li>
              </>
            )}

            {user?.uid ? (
              <li className='ml-4'>
                <button onClick={handleLogOut} className='btn btn-primary text-white'>
                  LOG OUT
                </button>
              </li>
            ) : (
              <li className='ml-4'>
                <Link to='/login' className='btn btn-primary text-white'>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
