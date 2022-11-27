import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) return <Loader />;
  if (!user?.uid) return <Navigate to='/login' state={{ from: location }} replace />;
  return children;
};
export default PrivateRoute;
