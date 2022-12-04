import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const ErrorElement = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/login');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='text-right'>
        <p className='mb-2 text-xl'>We Are Sorry! Please Logout And Login!</p>
        <button onClick={handleLogOut} className='btn-primary btn text-white'>
          Log Out
        </button>
      </div>
    </div>
  );
};
export default ErrorElement;
