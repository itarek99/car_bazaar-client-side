import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
  const { loginWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [userEmail, setUserEmail] = useState('');
  const [token] = useToken(userEmail);
  const from = location.state?.from?.pathname || '/';

  if (token) {
    navigate(from, { replace: true });
  }

  const { register, handleSubmit, reset } = useForm();

  const handleLogin = (data) => {
    const { email, password } = data;

    loginWithEmail(email, password)
      .then(() => {
        toast.success('Login Successful!');
        setUserEmail(email);
        reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Something Went Wrong!');
      });
  };

  return (
    <div className='container min-h-[80vh] flex items-center justify-center mx-auto px-2'>
      <div>
        <div className='text-center mb-6'>
          <h3 className='font-bold text-5xl mb-1'>CAR BAZAAR</h3>
          <p className='font-medium'>Sign Into Your Account</p>
        </div>
        <form onSubmit={handleSubmit(handleLogin)} className='w-full max-w-md mx-auto'>
          <input
            {...register('email', { required: true })}
            type='email'
            placeholder='Email Address'
            className='input input-bordered w-full'
          />
          <input
            {...register('password', { required: true })}
            type='password'
            placeholder='Password'
            className='input input-bordered w-full mt-4'
          />
          <input type='submit' value='login' className='btn btn-primary text-white w-full mt-4' />
        </form>

        <div className='flex flex-col w-full max-w-md mx-auto border-opacity-50 my-3'>
          <div className='divider'>Or Login With</div>
        </div>

        <div className='w-full max-w-md mx-auto'>
          <button className='btn btn-primary bg-red-600 text-white w-full'>Google</button>
          <p className='text-center mt-6'>
            Don't have an account?{' '}
            <Link to='/register' className='text-primary'>
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
