import axios from 'axios';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const Register = () => {
  const { createUserWithEmail, updateCurrentUser } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [token] = useToken(userEmail);

  if (token) {
    navigate('/');
  }

  const handleRegister = (data) => {
    const { email, password, name, photoURL, role } = data;

    createUserWithEmail(email, password)
      .then(() => {
        updateCurrentUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            reset();
            axios
              .post('http://localhost:5000/users', {
                name,
                email,
                role,
              })
              .then((response) => {
                if (response.data.acknowledged) {
                  toast.success('Registration Successful!');
                  setUserEmail(email);
                }
              })
              .catch(() => {
                toast.error('Something Wrong!');
              });
          })
          .catch((err) => {
            toast.error('Something Wrong!');
          });
      })
      .catch((err) => {
        toast.error('Something Wrong!');
      });
  };

  return (
    <div className='container min-h-[85vh] flex items-center justify-center mx-auto px-2'>
      <div>
        <div className='text-center mb-6'>
          <h3 className='font-bold text-5xl mb-1'>CAR BAZAAR</h3>
          <p className='font-medium'>Sign Into Your Account</p>
        </div>
        <form onSubmit={handleSubmit(handleRegister)} className='w-full max-w-md mx-auto'>
          <input
            type='text'
            {...register('name', { required: true })}
            placeholder='Full Name'
            className='input input-bordered w-full'
          />
          <input
            type='email'
            {...register('email', { required: true })}
            placeholder='Email Address'
            className='input input-bordered w-full mt-5'
          />
          <input
            type='text'
            {...register('photoURL', { required: true })}
            placeholder='Photo Url'
            className='input input-bordered w-full mt-5'
          />
          <input
            type='password'
            {...register('password', { required: true })}
            placeholder='Password'
            className='input input-bordered w-full mt-5'
          />

          <select {...register('role', { required: true })} className='select select-bordered w-full mt-5'>
            <option value='buyer'>Buyer</option>
            <option value='seller'>Seller</option>
          </select>

          <input type='submit' value='Register' className='btn btn-primary text-white w-full mt-5' />
        </form>

        <div className='w-full max-w-md mx-auto'>
          <p className='text-center mt-6'>
            Already a member?&nbsp;
            <Link to='/login' className='text-primary'>
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
