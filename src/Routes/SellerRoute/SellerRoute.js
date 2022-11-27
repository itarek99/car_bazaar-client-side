import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../context/AuthProvider';
import useSeller from '../../hooks/useSeller';

const SellerRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  if (isSellerLoading) return <Loader />;

  if (isSeller) return children;

  return (
    <div className='w-full h-[80vh] flex justify-center items-center'>
      <div className='text-center'>
        <p className='text-xl'>Please login with Seller Account</p>
        <Link to='/login' className='btn btn-primary mt-2 text-white'>
          Login
        </Link>
      </div>
    </div>
  );
};
export default SellerRoute;
