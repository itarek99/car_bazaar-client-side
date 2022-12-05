import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { HiMenu, HiOutlineUserCircle, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggler, setToggler] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('You Have Been Successfully Logged Out.');
      })
      .catch((err) => {
        toast.error('Something Went Wrong!');
      });
  };

  const handleToggle = () => {
    setToggler((prevState) => setToggler(!prevState));
  };

  return (
    <div className='bg-base-100'>
      <div className='container mx-auto py-2'>
        <nav className='navbar justify-between'>
          <Link to='/' className='text-2xl font-bold'>
            CAR BAZAAR
          </Link>

          {/* navbar for large screen */}
          <ul className='hidden gap-8 lg:flex'>
            <li className='font-medium  transition-colors duration-300 hover:text-primary'>
              <Link to='/blog'>Blog</Link>
            </li>
            {user?.uid && (
              <>
                <li className='font-medium  transition-colors duration-300 hover:text-primary'>
                  <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li className='font-medium  transition-colors duration-300 hover:text-primary'>
                  <Link to='/dashboard'>{user.displayName}</Link>
                </li>
              </>
            )}

            {user?.uid ? (
              <li className='ml-4'>
                <button onClick={handleLogOut} className='btn-primary btn text-white'>
                  LOG OUT
                </button>
              </li>
            ) : (
              <li className='ml-4'>
                <Link to='/login' className='btn-primary btn text-white'>
                  Login
                </Link>
              </li>
            )}
          </ul>

          {/* navbar for mobile screen */}
          <button onClick={handleToggle} className='lg:hidden'>
            {toggler ? <HiX className='text-4xl text-primary' /> : <HiMenu className='text-4xl' />}
          </button>

          <ul
            className={`absolute left-0 right-0 top-20 z-10  flex-col gap-2 bg-base-100 px-2 pb-6 lg:hidden ${
              toggler ? 'flex' : 'hidden'
            }`}
          >
            <li className='font-medium  transition-colors duration-300 hover:text-primary'>
              <Link to='/blog'>Blog</Link>
            </li>
            {user?.uid && (
              <>
                <li className='font-medium  transition-colors duration-300 hover:text-primary'>
                  <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li className='font-medium  transition-colors duration-300 hover:text-primary'>
                  <Link className='flex items-center gap-1' to='/dashboard'>
                    <HiOutlineUserCircle /> {user.displayName}
                  </Link>
                </li>
              </>
            )}

            {user?.uid ? (
              <li className='mt-4'>
                <button onClick={handleLogOut} className='btn-primary btn text-white'>
                  LOG OUT
                </button>
              </li>
            ) : (
              <li className='mt-4'>
                <Link to='/login' className='btn-primary btn text-white'>
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
