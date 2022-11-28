import { Link } from 'react-router-dom';

const NotFoundRoute = () => {
  return (
    <div className='grid h-screen place-content-center bg-white'>
      <div className='text-center'>
        <strong className='text-9xl font-black text-primary'>Ops!</strong>

        <h1 className='text-xl font-bold tracking-tight text-gray-900 mt-10'>404 - PAGE NOT FOUND</h1>

        <p className=' text-gray-500 text-sm'>Looks like this page went on vacation!</p>

        <div className='mt-4'>
          <Link to='/' className='btn btn-primary text-white'>
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFoundRoute;
