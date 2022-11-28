import { useContext } from 'react';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  if (isAdminLoading) return <Loader />;

  if (isAdmin) return children;

  return (
    <div className='w-full h-[80vh] flex justify-center items-center'>
      <div className='text-center'>
        <p className='text-xl'>You Are Not Supposed To Be Here!</p>
      </div>
    </div>
  );
};
export default AdminRoute;
