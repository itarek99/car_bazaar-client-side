import loader from '../../assets/loader/loader.gif';

const Loader = () => {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-white'>
      <img src={loader} alt='' />
    </div>
  );
};
export default Loader;
