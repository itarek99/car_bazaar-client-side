import loader from '../../assets/loader/loader.gif';

const Loader = () => {
  return (
    <div className='min-h-screen fixed inset-0 flex justify-center items-center bg-white z-50'>
      <img src={loader} alt='' />
    </div>
  );
};
export default Loader;
